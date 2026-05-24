import JSZip from "jszip";
import { load_figura_template } from "./load_figura_template"
const LIMB_MAPPING = {
	"100": "Head",
	"110": "LeftArm",
	"111": "RightArm",
	"010": "Body",
	"011": "LeftLeg",
	"001": "RightLeg"
}
function arrayBufferToBase64Async(buffer) {
	const blob = new Blob([buffer]);
	const reader = new FileReader();
	return new Promise((resolve) => {
		reader.onload = () => {
			const dataUrl = reader.result;
			// Strip the prefix (e.g., "data:application/octet-stream;base64,")
			const base64 = dataUrl.split(',')[1];
			resolve(base64);
		};
		reader.readAsDataURL(blob);
	});
}

async function importOBJ(result: FileList) {
	// Pick the first obj & mtl.
	// If there isn't any mtl, then the import should stop

	let files: Record<string, File> = {}

	let mtl: string = ""
	let obj: string = ""
	for (let file of result) {
		if (file.name.match(".obj")) {
			obj = await file.text()
		}
		if (file.name.match(".mtl")) {
			mtl = await file.text()
		}
		files[file.name] = file
	}

	Project.textures.forEach(function (tex) {
		tex.remove()
	})

	let mtl_materials = {};
	let mtl_textures = {};
	let mtl_lines = mtl.split(/[\r\n]+/);
	let current_material;
	let current_material_name;
	for (let line of mtl_lines) {
		let args = line.split(/\s+/).filter(arg => typeof arg !== 'undefined' && arg !== '');
		let cmd = args.shift();

		switch (cmd) {
			case 'newmtl': {
				current_material_name = args[0]
				current_material = mtl_materials[args[0]] = {};
				break;
			}
			case 'Kd': {
				// This is the colours that define where the limbs should map
				let mapping = LIMB_MAPPING[args.join("")]
				current_material.limb_map = mapping
				break;
			}
			case 'map_Kd': {
				// This loads the texutres
				if ((current_material.limb_map || current_material_name.includes("Meta")) && !current_material_name.includes("Export")) {
					let texture_name = args[0];
					let texutre_file = files[texture_name]
					if (!texutre_file) {
						console.warn(`${texutre_file} was not found`)
					} else {
						let texture = mtl_textures[texture_name];
						if (!texture) {
							let texture_array_buffer = (await files[texture_name].arrayBuffer())
							let texture_data = await arrayBufferToBase64Async(texture_array_buffer)
							let data_uri = `data:image/png;base64,${texture_data}`
							texture = new Texture({ name: texture_name }).fromFile({ name: texture_name, content: data_uri, path: '' }).add(false);
							mtl_textures[texture_name] = texture
						}

						current_material.texture = texture
					}
				}

			}
		}
	}


	let content = obj;
	let lines = content.split(/[\r\n]+/);

	function toVector(args, length) {
		return args.map(v => parseFloat(v));
	}

	let mesh;
	let vertices = [];
	let vertex_keys = {};
	let vertex_textures = [];
	let vertex_normals = [];
	let meshes = [];
	let vector1 = new THREE.Vector3();
	let vector2 = new THREE.Vector3();
	let current_texture;

	Undo.initEdit({ outliner: true, elements: meshes, selection: true });

	lines.forEach(line => {

		if (line.substr(0, 1) == '#' || !line) return;

		let args = line.split(/\s+/).filter(arg => typeof arg !== 'undefined' && arg !== '');
		let cmd = args.shift();

		if (['o', 'g'].includes(cmd) || (cmd == 'v' && !mesh)) {
			mesh = new Mesh({
				name: ['o', 'g'].includes(cmd) ? args[0] : 'unknown',
				vertices: {}
			})

			vertex_keys = {};
			meshes.push(mesh);
		}
		if (cmd == 'v') {
			// Modified to fix Roblox Avatar Scaling
			let vec = toVector(args, 3);
			vec[0] *= 6;
			vec[1] *= 6;
			vec[2] *= 6;

			vertices.push(vec);
		}
		if (cmd == 'vt') {
			vertex_textures.push(toVector(args, 2))
		}
		if (cmd == 'vn') {
			vertex_normals.push(toVector(args, 3))
		}
		if (cmd == 'f') {
			let f = {
				vertices: [],
				vertex_textures: [],
				vertex_normals: [],
			}
			args.forEach((triplet, i) => {
				if (i >= 4) return;
				let [v, vt, vn] = triplet.split('/').map(v => parseInt(v));
				if (!vertex_keys[v - 1]) {
					vertex_keys[v - 1] = mesh.addVertices(vertices[v - 1])[0];
				}
				f.vertices.push(vertex_keys[v - 1]);
				f.vertex_textures.push(vertex_textures[vt - 1]);
				f.vertex_normals.push(vertex_normals[vn - 1]);
			})

			let uv = {};
			f.vertex_textures.forEach((vt, i) => {
				let key = f.vertices[i];
				if (vt instanceof Array) {
					uv[key] = [
						vt[0] * Project.texture_width,
						(1 - vt[1]) * Project.texture_width
					];
				} else {
					uv[key] = [0, 0];
				}
			})
			let face = new MeshFace(mesh, {
				vertices: f.vertices,
				uv,
				texture: current_texture
			})
			mesh.addFaces(face);

			if (f.vertex_normals.find(v => v)) {

				vector1.fromArray(face.getNormal());
				vector2.fromArray(f.vertex_normals[0]);
				let angle = vector1.angleTo(vector2);
				if (angle > Math.PI / 2) {
					face.invert();
				}
			}
		}
		if (cmd == 'usemtl') {
			let material = mtl_materials[args[0]];
			let texture = material.texture;
			let mapping = material.limb_map;

			if (args[0].includes("Meta")) {
				current_texture = texture;

			} else {

				if (args[0].includes("Handle")) {
					current_texture = texture;

				} else {
					// find meta material 
					for (let mat_name in mtl_materials) {
						if (mat_name.includes("Meta")) {
							let texture = mtl_materials[mat_name].texture;
							if (texture) {
								current_texture = mtl_materials[mat_name].texture;
								break;

							}
						}
					}

				}
				mesh["limb_mapping"] = mapping
			}

		}
	})
	meshes.forEach(mesh => {
		let mesh_name: string = mesh.name
		if (mesh_name.toLowerCase().includes("meta")) {
			return;
		}
		let added_limb = false;
		mesh.init();
		Project.groups.forEach(group => {
			if (group.name == mesh["limb_mapping"]) {
				mesh.addTo(group);
				added_limb = true
			}
		});
		if (!added_limb) {
			mesh.remove()
		}
	})
	Cube.all.forEach(cube => {
		cube.visibility = false
	})
	Undo.finishEdit('Import OBJ');
}

function download_rig(outfit_name: string) {
	// Legacy exporter
	let model = Codecs.project.compile({ raw: true })
	model.meta.format_version = '4.10';
	function compileGroups(undo, lut) {
		var result = []
		function iterate(array, save_array) {
			var i = 0;
			for (var element of array) {
				if (element.type === 'group') {
					var obj = element.compile(undo)

					if (element.children.length > 0) {
						iterate(element.children, obj.children)
					}
					save_array.push(obj)
				} else {
					if (undo) {
						save_array.push(element.uuid)
					} else {
						var index = elements.indexOf(element)
						if (index >= 0) {
							save_array.push(index)
						}
					}
				}
				i++;
			}
		}
		iterate(Outliner.root, result);
		return result;
	}
	model.outliner = compileGroups(true);
	delete model.groups;
	for (let anim of (model.animations ?? [])) {
		for (let animator_id in anim.animators) {
			for (let kf of (anim.animators[animator_id].keyframes ?? [])) {
				for (let dp of (kf.data_points ?? [])) {
					if ((kf.channel == 'rotation' || kf.channel == 'position') && dp.x) dp.x = invertMolang(dp.x);
					if (kf.channel == 'rotation' && dp.y) dp.y = invertMolang(dp.y);
				}
			}
		}
	}

	let compiled_project = compileJSON(model, { small: Settings.get('minify_bbmodel') });
	let export_zip = new JSZip();
	export_zip.file("avatar.json", `{
		"name": "${outfit_name}",
		"description": "",
		"authors": [
			""
		],
		"color": "#ffffff"
		}`
	)
	export_zip.file("script.lua", `
		-- Auto generated script file --
		--hide vanilla model
		vanilla_model.PLAYER:setVisible(false)`
	)
	export_zip.file("avatar.png", "")
	export_zip.file("model.bbmodel", compiled_project)
	export_zip.generateAsync({ type: "blob" }).then(function (content) {
		var a = document.createElement("a");
		document.body.appendChild(a);
		a.style = "display: none";
		var url = window.URL.createObjectURL(content);
		a.href = url;
		a.download = "avatar.zip";
		a.click();
		window.URL.revokeObjectURL(url);
	})
}

function prompt_download_rig() {
	let already_closing = false
	var myDialog = new Dialog({
		id: 'custom_popup',
		title: 'Download Your Roblox Rig',
		width: 400,
		lines: [
			'<p>You can use your rig in Minecraft!</p>',
			'<h3><b>Next Steps:</b></h3>',
			'<br>',
			'<p>Install the Figura mod. <a href="https://modrinth.com/mod/figura">You can download it here</a><p>',
			'<br>',
			'<p>Open Minecraft, and open Figura. (you may need to create a world for this.) </p>',
			'<img src="assets/roblox_import/figurabutton.png"/>',
			'<p>Then click the folder icon, and drag and drop the zip file in there to use your avatar! </p>',
			'<img src="assets/roblox_import/figurafolder.png" style="width: 100%"/>',
			'<input type="text" id="outfit_name" placeholder="Enter Outfit Name" style="width:100%"/>'
		],

		buttons: ['Download', "Restart"],
		onConfirm: function (result, event) {
			let outfit_name_value = document.getElementById("outfit_name").value
			if (!outfit_name_value || outfit_name_value == "") {
				prompt_error("You need to set an outfit name", function () { })
			} else {
				download_rig(outfit_name_value)

			}
			return false;
		},
		onCancel: function () {
			if (!already_closing) {
				already_closing = true
				Project.close(true)

			}
		}
	});
	myDialog.show();
}

function prompt_error(error, on_ack) {
	var myDialog = new Dialog({
		id: 'custom_popup',
		title: 'Error',
		width: 400,
		lines: [
			`<p>${error}</p>`
		],
		buttons: ["Ok"],

		onConfirm: on_ack,
		onCancel: function () {
			// this.hide();
		}
	});
	myDialog.show()
}


function prompt_upload_rig() {
	let generated_dropzone = `
	<style>
		#drop-zone {
			width: 100%;
			max-width: 400px;
			height: 200px;
			padding: 25px;
			border: 2px dashed #ccc;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			cursor: pointer;
			gap: 8px;
			flex-direction : column;
		}

		/* Class to be added via JavaScript when dragging over */
		#drop-zone.drag-over {
		border-color: #000;
		background-color: #eee;
		}
	</style>
	<div id="drop-zone">
		<p>Upload your Roblox Rig that has been generated by avatarBoom.</p>
		<p>Your Rig is in the folder that you saved to. Drag & drop everything in the folder here.</p>
	</div>
`
	var myDialog = new Dialog({
		id: 'custom_popup',
		title: 'Upload Your Roblox Rig',
		width: 400,
		lines: [generated_dropzone],
		buttons: [],
		onConfirm: function () {
			return false

		},
		onCancel: function () {
			// this.hide();
			return false
		}
	});

	myDialog.show();
	let dropZone = document.getElementById('drop-zone');
	dropZone.addEventListener('drop', function (e) {
		// vaildate dropped files
		myDialog.hide()

		let files = e.dataTransfer.files;
		let found_obj = false
		let found_mtl = false
		for (let file of files) {
			if (file.name.match(".obj")) {
				found_obj = true
			}
			if (file.name.match(".mtl")) {
				found_mtl = true
			}
		}
		if (!found_mtl || !found_obj) {
			prompt_error("You need to include the .obj and .mtl file.", function () {
				myDialog.show()
			})
			return;
		}
		importOBJ(files).then(prompt_download_rig)
	});
}

window.roblox_import = {
	start: function () {
		// Autoloads blockbench
		setInterval(function () {
			// tacky shit
			if (!Project) {
				load_figura_template()
				// main code to import roblox 
				prompt_upload_rig()
			}
		}, 100)
	}
}
