// When it's done loading, load in the figura template

export function load_figura_template() {
	window.Codecs.project.load({
		"meta": {
			"format_version": "4.9",
			"model_format": "free"
		},
		"resolution": {
			"width": 64,
			"height": 64
		},
		"elements": [
			{
				"name": "Head",
				"uuid": "232d5935-65e5-4cbc-bfee-6c00b2137c0e",
				"origin": [
					0.0,
					24.0,
					0.0
				],
				"from": [
					-4.0,
					24.0,
					-4.0
				],
				"to": [
					4.0,
					32.0,
					4.0
				],
				"inflate": 0.0,
				"faces": {
					"up": {
						"uv": [
							16.0,
							8.0,
							8.0,
							0.0
						],
						"texture": 0
					},
					"down": {
						"uv": [
							24.0,
							0.0,
							16.0,
							8.0
						],
						"texture": 0
					},
					"east": {
						"uv": [
							0.0,
							8.0,
							8.0,
							16.0
						],
						"texture": 0
					},
					"north": {
						"uv": [
							8.0,
							8.0,
							16.0,
							16.0
						],
						"texture": 0
					},
					"west": {
						"uv": [
							16.0,
							8.0,
							24.0,
							16.0
						],
						"texture": 0
					},
					"south": {
						"uv": [
							24.0,
							8.0,
							32.0,
							16.0
						],
						"texture": 0
					}
				}
			},
			{
				"name": "Hat",
				"uuid": "ec0ccc28-20da-4cf4-a9c7-e3a224ddc8c6",
				"origin": [
					0.0,
					24.0,
					0.0
				],
				"from": [
					-4.0,
					24.0,
					-4.0
				],
				"to": [
					4.0,
					32.0,
					4.0
				],
				"inflate": 0.5,
				"faces": {
					"up": {
						"uv": [
							48.0,
							8.0,
							40.0,
							0.0
						],
						"texture": 0
					},
					"down": {
						"uv": [
							56.0,
							0.0,
							48.0,
							8.0
						],
						"texture": 0
					},
					"east": {
						"uv": [
							32.0,
							8.0,
							40.0,
							16.0
						],
						"texture": 0
					},
					"north": {
						"uv": [
							40.0,
							8.0,
							48.0,
							16.0
						],
						"texture": 0
					},
					"west": {
						"uv": [
							48.0,
							8.0,
							56.0,
							16.0
						],
						"texture": 0
					},
					"south": {
						"uv": [
							56.0,
							8.0,
							64.0,
							16.0
						],
						"texture": 0
					}
				}
			},
			{
				"name": "Body",
				"uuid": "d91c9a31-2738-4c87-8af4-a8668385a26d",
				"origin": [
					0.0,
					24.0,
					0.0
				],
				"from": [
					-4.0,
					12.0,
					-2.0
				],
				"to": [
					4.0,
					24.0,
					2.0
				],
				"inflate": 0.0,
				"faces": {
					"up": {
						"uv": [
							28.0,
							20.0,
							20.0,
							16.0
						],
						"texture": 0
					},
					"down": {
						"uv": [
							36.0,
							16.0,
							28.0,
							20.0
						],
						"texture": 0
					},
					"east": {
						"uv": [
							16.0,
							20.0,
							20.0,
							32.0
						],
						"texture": 0
					},
					"north": {
						"uv": [
							20.0,
							20.0,
							28.0,
							32.0
						],
						"texture": 0
					},
					"west": {
						"uv": [
							28.0,
							20.0,
							32.0,
							32.0
						],
						"texture": 0
					},
					"south": {
						"uv": [
							32.0,
							20.0,
							40.0,
							32.0
						],
						"texture": 0
					}
				}
			},
			{
				"name": "Jacket",
				"uuid": "55cef3a4-0e28-46a1-b41d-d8ff748306df",
				"origin": [
					0.0,
					24.0,
					0.0
				],
				"from": [
					-4.0,
					12.0,
					-2.0
				],
				"to": [
					4.0,
					24.0,
					2.0
				],
				"inflate": 0.25,
				"faces": {
					"up": {
						"uv": [
							28.0,
							36.0,
							20.0,
							32.0
						],
						"texture": 0
					},
					"down": {
						"uv": [
							36.0,
							32.0,
							28.0,
							36.0
						],
						"texture": 0
					},
					"east": {
						"uv": [
							16.0,
							36.0,
							20.0,
							48.0
						],
						"texture": 0
					},
					"north": {
						"uv": [
							20.0,
							36.0,
							28.0,
							48.0
						],
						"texture": 0
					},
					"west": {
						"uv": [
							28.0,
							36.0,
							32.0,
							48.0
						],
						"texture": 0
					},
					"south": {
						"uv": [
							32.0,
							36.0,
							40.0,
							48.0
						],
						"texture": 0
					}
				}
			},
			{
				"name": "LeftArm",
				"uuid": "b006af1f-c7ee-49d9-9292-d8d75861bc4a",
				"origin": [
					-5.0,
					22.0,
					0.0
				],
				"from": [
					-8.0,
					12.0,
					-2.0
				],
				"to": [
					-4.0,
					24.0,
					2.0
				],
				"inflate": 0.0,
				"faces": {
					"up": {
						"uv": [
							40.0,
							52.0,
							36.0,
							48.0
						],
						"texture": 0
					},
					"down": {
						"uv": [
							44.0,
							48.0,
							40.0,
							52.0
						],
						"texture": 0
					},
					"east": {
						"uv": [
							32.0,
							52.0,
							36.0,
							64.0
						],
						"texture": 0
					},
					"north": {
						"uv": [
							36.0,
							52.0,
							40.0,
							64.0
						],
						"texture": 0
					},
					"west": {
						"uv": [
							40.0,
							52.0,
							44.0,
							64.0
						],
						"texture": 0
					},
					"south": {
						"uv": [
							44.0,
							52.0,
							48.0,
							64.0
						],
						"texture": 0
					}
				}
			},
			{
				"name": "Left Sleeve",
				"uuid": "45a9b387-5b40-4d04-930a-6bf68a18baf5",
				"origin": [
					-5.0,
					22.0,
					0.0
				],
				"from": [
					-8.0,
					12.0,
					-2.0
				],
				"to": [
					-4.0,
					24.0,
					2.0
				],
				"inflate": 0.25,
				"faces": {
					"up": {
						"uv": [
							56.0,
							52.0,
							52.0,
							48.0
						],
						"texture": 0
					},
					"down": {
						"uv": [
							60.0,
							48.0,
							56.0,
							52.0
						],
						"texture": 0
					},
					"east": {
						"uv": [
							48.0,
							52.0,
							52.0,
							64.0
						],
						"texture": 0
					},
					"north": {
						"uv": [
							52.0,
							52.0,
							56.0,
							64.0
						],
						"texture": 0
					},
					"west": {
						"uv": [
							56.0,
							52.0,
							60.0,
							64.0
						],
						"texture": 0
					},
					"south": {
						"uv": [
							60.0,
							52.0,
							64.0,
							64.0
						],
						"texture": 0
					}
				}
			},
			{
				"name": "RightArm",
				"uuid": "42db8cad-2159-48bb-9205-0cc1b2fd0875",
				"origin": [
					5.0,
					22.0,
					0.0
				],
				"from": [
					4.0,
					12.0,
					-2.0
				],
				"to": [
					8.0,
					24.0,
					2.0
				],
				"inflate": 0.0,
				"faces": {
					"up": {
						"uv": [
							48.0,
							20.0,
							44.0,
							16.0
						],
						"texture": 0
					},
					"down": {
						"uv": [
							52.0,
							16.0,
							48.0,
							20.0
						],
						"texture": 0
					},
					"east": {
						"uv": [
							40.0,
							20.0,
							44.0,
							32.0
						],
						"texture": 0
					},
					"north": {
						"uv": [
							44.0,
							20.0,
							48.0,
							32.0
						],
						"texture": 0
					},
					"west": {
						"uv": [
							48.0,
							20.0,
							52.0,
							32.0
						],
						"texture": 0
					},
					"south": {
						"uv": [
							52.0,
							20.0,
							56.0,
							32.0
						],
						"texture": 0
					}
				}
			},
			{
				"name": "Right Sleeve",
				"uuid": "b89f592c-bd08-45ee-8ed6-a755ac589635",
				"origin": [
					5.0,
					22.0,
					0.0
				],
				"from": [
					4.0,
					12.0,
					-2.0
				],
				"to": [
					8.0,
					24.0,
					2.0
				],
				"inflate": 0.25,
				"faces": {
					"up": {
						"uv": [
							48.0,
							36.0,
							44.0,
							32.0
						],
						"texture": 0
					},
					"down": {
						"uv": [
							52.0,
							32.0,
							48.0,
							36.0
						],
						"texture": 0
					},
					"east": {
						"uv": [
							40.0,
							36.0,
							44.0,
							48.0
						],
						"texture": 0
					},
					"north": {
						"uv": [
							44.0,
							36.0,
							48.0,
							48.0
						],
						"texture": 0
					},
					"west": {
						"uv": [
							48.0,
							36.0,
							52.0,
							48.0
						],
						"texture": 0
					},
					"south": {
						"uv": [
							52.0,
							36.0,
							56.0,
							48.0
						],
						"texture": 0
					}
				}
			},
			{
				"name": "LeftLeg",
				"uuid": "4550386b-f47c-46fb-99aa-156452aa00b0",
				"origin": [
					-1.9,
					12.0,
					0.0
				],
				"from": [
					-3.9,
					0.0,
					-2.0
				],
				"to": [
					0.10000000000000009,
					12.0,
					2.0
				],
				"inflate": 0.0,
				"faces": {
					"up": {
						"uv": [
							24.0,
							52.0,
							20.0,
							48.0
						],
						"texture": 0
					},
					"down": {
						"uv": [
							28.0,
							48.0,
							24.0,
							52.0
						],
						"texture": 0
					},
					"east": {
						"uv": [
							16.0,
							52.0,
							20.0,
							64.0
						],
						"texture": 0
					},
					"north": {
						"uv": [
							20.0,
							52.0,
							24.0,
							64.0
						],
						"texture": 0
					},
					"west": {
						"uv": [
							24.0,
							52.0,
							28.0,
							64.0
						],
						"texture": 0
					},
					"south": {
						"uv": [
							28.0,
							52.0,
							32.0,
							64.0
						],
						"texture": 0
					}
				}
			},
			{
				"name": "Left Pants",
				"uuid": "517322d3-fc4b-4ed9-8888-070cc6a515b6",
				"origin": [
					-1.9,
					12.0,
					0.0
				],
				"from": [
					-3.9,
					0.0,
					-2.0
				],
				"to": [
					0.10000000000000009,
					12.0,
					2.0
				],
				"inflate": 0.25,
				"faces": {
					"up": {
						"uv": [
							8.0,
							52.0,
							4.0,
							48.0
						],
						"texture": 0
					},
					"down": {
						"uv": [
							12.0,
							48.0,
							8.0,
							52.0
						],
						"texture": 0
					},
					"east": {
						"uv": [
							0.0,
							52.0,
							4.0,
							64.0
						],
						"texture": 0
					},
					"north": {
						"uv": [
							4.0,
							52.0,
							8.0,
							64.0
						],
						"texture": 0
					},
					"west": {
						"uv": [
							8.0,
							52.0,
							12.0,
							64.0
						],
						"texture": 0
					},
					"south": {
						"uv": [
							12.0,
							52.0,
							16.0,
							64.0
						],
						"texture": 0
					}
				}
			},
			{
				"name": "RightLeg",
				"uuid": "f7b7ff37-4e7e-4b41-b64e-6c57f28c5302",
				"origin": [
					1.9,
					12.0,
					0.0
				],
				"from": [
					-0.1,
					0.0,
					-2.0
				],
				"to": [
					3.9,
					12.0,
					2.0
				],
				"inflate": 0.0,
				"faces": {
					"up": {
						"uv": [
							8.0,
							20.0,
							4.0,
							16.0
						],
						"texture": 0
					},
					"down": {
						"uv": [
							12.0,
							16.0,
							8.0,
							20.0
						],
						"texture": 0
					},
					"east": {
						"uv": [
							0.0,
							20.0,
							4.0,
							32.0
						],
						"texture": 0
					},
					"north": {
						"uv": [
							4.0,
							20.0,
							8.0,
							32.0
						],
						"texture": 0
					},
					"west": {
						"uv": [
							8.0,
							20.0,
							12.0,
							32.0
						],
						"texture": 0
					},
					"south": {
						"uv": [
							12.0,
							20.0,
							16.0,
							32.0
						],
						"texture": 0
					}
				}
			},
			{
				"name": "Right Pants",
				"uuid": "2bb36101-0500-4a43-bbf4-b9797a4f2760",
				"origin": [
					1.9,
					12.0,
					0.0
				],
				"from": [
					-0.1,
					0.0,
					-2.0
				],
				"to": [
					3.9,
					12.0,
					2.0
				],
				"inflate": 0.25,
				"faces": {
					"up": {
						"uv": [
							8.0,
							36.0,
							4.0,
							32.0
						],
						"texture": 0
					},
					"down": {
						"uv": [
							12.0,
							32.0,
							8.0,
							36.0
						],
						"texture": 0
					},
					"east": {
						"uv": [
							0.0,
							36.0,
							4.0,
							48.0
						],
						"texture": 0
					},
					"north": {
						"uv": [
							4.0,
							36.0,
							8.0,
							48.0
						],
						"texture": 0
					},
					"west": {
						"uv": [
							8.0,
							36.0,
							12.0,
							48.0
						],
						"texture": 0
					},
					"south": {
						"uv": [
							12.0,
							36.0,
							16.0,
							48.0
						],
						"texture": 0
					}
				}
			}
		],
		"outliner": [
			{
				"name": "root",
				"uuid": "3f2639be-9c83-4890-96ef-3c80b94a285c",
				"origin": [
					0.0,
					0.0,
					0.0
				],
				"isOpen": true,
				"children": [
					{
						"name": "Head",
						"uuid": "9cb76339-9280-4fbd-914d-11e7a072577e",
						"origin": [
							0.0,
							24.0,
							0.0
						],
						"isOpen": true,
						"children": [
							"232d5935-65e5-4cbc-bfee-6c00b2137c0e",
							"ec0ccc28-20da-4cf4-a9c7-e3a224ddc8c6",
							{
								"name": "LeftSpyglassPivot",
								"uuid": "989d5ef9-929d-4089-a382-9d7f84649f34",
								"origin": [
									-2.0,
									28.0,
									-4.0
								],
								"isOpen": true,
								"children": []
							},
							{
								"name": "RightSpyglassPivot",
								"uuid": "98fd8c4b-e13c-4dce-8c46-4175ff87be4a",
								"origin": [
									2.0,
									28.0,
									-4.0
								],
								"isOpen": true,
								"children": []
							},
							{
								"name": "HelmetItemPivot",
								"uuid": "d4f01751-170c-492a-a090-1fb2bc4bdb91",
								"origin": [
									0.0,
									24.0,
									0.0
								],
								"isOpen": true,
								"children": []
							},
							{
								"name": "HelmetPivot",
								"uuid": "dd895acf-9fc4-446d-8d47-5777229a5f60",
								"origin": [
									0.0,
									24.0,
									0.0
								],
								"isOpen": true,
								"children": []
							}
						]
					},
					{
						"name": "Body",
						"uuid": "efd5fc5f-7a44-4cb1-9e8a-247ccb0667bf",
						"origin": [
							0.0,
							24.0,
							0.0
						],
						"isOpen": true,
						"children": [
							"d91c9a31-2738-4c87-8af4-a8668385a26d",
							"55cef3a4-0e28-46a1-b41d-d8ff748306df",
							{
								"name": "LeftParrotPivot",
								"uuid": "3c5a1c54-e2ef-46fa-89b0-68c063504799",
								"origin": [
									-6.0,
									24.0,
									0.0
								],
								"isOpen": true,
								"children": []
							},
							{
								"name": "RightParrotPivot",
								"uuid": "ea8502d6-2830-4c28-915f-e28a2ac24b54",
								"origin": [
									6.0,
									24.0,
									0.0
								],
								"isOpen": true,
								"children": []
							},
							{
								"name": "ChestplatePivot",
								"uuid": "3732bbeb-7851-4845-89c0-76eb191f95e4",
								"origin": [
									0.0,
									24.0,
									0.0
								],
								"isOpen": true,
								"children": []
							},
							{
								"name": "LeftElytraPivot",
								"uuid": "37ae6712-ef1c-4f31-a7aa-1c700875c35b",
								"origin": [
									0.0,
									24.0,
									0.0
								],
								"isOpen": true,
								"children": []
							},
							{
								"name": "RightElytraPivot",
								"uuid": "9cf6ed1a-6a5c-462f-a240-42944759b6ac",
								"origin": [
									0.0,
									24.0,
									0.0
								],
								"isOpen": true,
								"children": []
							},
							{
								"name": "LeggingsPivot",
								"uuid": "d6da7145-ccc4-40e7-be8e-7d2dcabdc9df",
								"origin": [
									0.0,
									12.0,
									0.0
								],
								"isOpen": true,
								"children": []
							}
						]
					},
					{
						"name": "LeftArm",
						"uuid": "ecb93d98-8449-4a0d-b884-1dac58fce88a",
						"origin": [
							-5.0,
							22.0,
							0.0
						],
						"isOpen": true,
						"children": [
							"b006af1f-c7ee-49d9-9292-d8d75861bc4a",
							"45a9b387-5b40-4d04-930a-6bf68a18baf5",
							{
								"name": "LeftItemPivot",
								"uuid": "952f3bf0-d9c8-4269-a0ff-1c789fa5eccd",
								"origin": [
									-6.0,
									12.0,
									-2.0
								],
								"isOpen": true,
								"children": []
							},
							{
								"name": "LeftShoulderPivot",
								"uuid": "be36e07c-b0c8-4807-a620-5b30d7447246",
								"origin": [
									-6.0,
									24.0,
									0.0
								],
								"isOpen": true,
								"children": []
							}
						]
					},
					{
						"name": "RightArm",
						"uuid": "6a38cf53-9f6a-4f4f-ae0e-c48e98b27b5e",
						"origin": [
							5.0,
							22.0,
							0.0
						],
						"isOpen": true,
						"children": [
							"42db8cad-2159-48bb-9205-0cc1b2fd0875",
							"b89f592c-bd08-45ee-8ed6-a755ac589635",
							{
								"name": "RightItemPivot",
								"uuid": "d715bb1d-5d40-40c6-90e3-4baa68584c01",
								"origin": [
									6.0,
									12.0,
									-2.0
								],
								"isOpen": true,
								"children": []
							},
							{
								"name": "RightShoulderPivot",
								"uuid": "6210b089-d58d-42cd-8c33-15c6eeb7d22d",
								"origin": [
									6.0,
									24.0,
									0.0
								],
								"isOpen": true,
								"children": []
							}
						]
					},
					{
						"name": "LeftLeg",
						"uuid": "5ec3597b-2f13-4b5a-8e68-41ffe92eb7ef",
						"origin": [
							-1.9,
							12.0,
							0.0
						],
						"isOpen": true,
						"children": [
							"4550386b-f47c-46fb-99aa-156452aa00b0",
							"517322d3-fc4b-4ed9-8888-070cc6a515b6",
							{
								"name": "LeftLeggingPivot",
								"uuid": "87575b31-e53b-47e1-8316-82dace9d018b",
								"origin": [
									-2.0,
									12.0,
									0.0
								],
								"isOpen": true,
								"children": []
							},
							{
								"name": "LeftBootPivot",
								"uuid": "f84f471d-29ca-4652-89a2-003cf86269ec",
								"origin": [
									-2.0,
									0.0,
									0.0
								],
								"isOpen": true,
								"children": []
							}
						]
					},
					{
						"name": "RightLeg",
						"uuid": "f0d15fef-ca28-4059-b73b-0dca008d3069",
						"origin": [
							1.9,
							12.0,
							0.0
						],
						"isOpen": true,
						"children": [
							"f7b7ff37-4e7e-4b41-b64e-6c57f28c5302",
							"2bb36101-0500-4a43-bbf4-b9797a4f2760",
							{
								"name": "RightLeggingPivot",
								"uuid": "22f18d9b-76ee-4e95-8d83-6ae89cad80a9",
								"origin": [
									2.0,
									12.0,
									0.0
								],
								"isOpen": true,
								"children": []
							},
							{
								"name": "RightBootPivot",
								"uuid": "abcad5b2-bd42-4a8c-98d2-249028f9bb9d",
								"origin": [
									2.0,
									0.0,
									0.0
								],
								"isOpen": true,
								"children": []
							}
						]
					}
				]
			}
		],
		"textures": [
			{
				"name": "Skin",
				"id": "0",
				"source": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAqUExURbTU4VNhdOz4/W54jEPojVu89PSGhvjdcnv/o3vU//+npP/4mc3v/wAAADQpb54AAAAOdFJOU/////////////////8ARcDcyAAAAAlwSFlzAAAScgAAEnIBXmVb4wAAAUBJREFUWEftldtygzAMREnrS2nJ//9uvdIqJjKQmzN58ZlMPJLXC1jCTGcykRNh+gKnm/lq8CVMp2+hNeDAiWHwHgPCKrUGhNPVIJBIEsmE07vzU/gRQpyFmH6FlP+EHPRCIeoYk44p69jTYFnmeVk+afDyIzxtQFilx8sIG2sQ8SxIxxSkYwpMNzqgBtrCVbjT1l4HOhm4W0MMkANMbz+CbZBtjN8w2amC13F9MdASonwoXWZsJa3ldDquHwaFYdDFwLWoxcBywOu4vsPLxD98sqqQAxPr/JUOdDJwt4YYIAeY3n4EvzkWA8sBr+P6YqBHNo5rHNU4xtdH+OX49jpNDwMwDLoYuBa1GFgOeB3X779M98ZqUH4lqoL2c38dr/SdDA5uERzFu5t4b9yWcfuYr7HTD4Nh0MngRqsexzn/A89lh3llFMmDAAAAAElFTkSuQmCC",
				"width": 64,
				"height": 64,
				"uv_width": 64,
				"uv_height": 64
			}
		]
	}, { path: '' })

}
