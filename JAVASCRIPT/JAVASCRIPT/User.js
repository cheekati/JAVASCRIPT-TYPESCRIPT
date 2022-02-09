var user={
	"results": [{
		"gender": "female",
		"name": {
			"title": "Ms",
			"first": "Julia",
			"last": "Iglesias"
		},
		"location": {
			"street": {
				"number": 1011,
				"name": "Calle de Téllez"
			},
			"city": "Ciudad Real",
			"state": "Ceuta",
			"country": "Spain",
			"postcode": 15181,
			"coordinates": {
				"latitude": "-20.1204",
				"longitude": "2.6574"
			},
			"timezone": {
				"offset": "+11:00",
				"description": "Magadan, Solomon Islands, New Caledonia"
			}
		},
		"email": "julia.iglesias@example.com",
		"login": {
			"uuid": "7cf1b370-7633-41ca-8782-f372c9b34c87",
			"username": "orangedog955",
			"password": "jerk",
			"salt": "BzlohVOW",
			"md5": "85a6a04644be6d2304ea0d446a21a6b0",
			"sha1": "ed2ec8ce1baaa375117b9e0ff7433b9c786e10ea",
			"sha256": "855e74cb85c194f4cfdec9c432ae9fe2b61f6413f1065d7404665c16d20674a6"
		},
		"dob": {
			"date": "1955-05-31T05:46:50.237Z",
			"age": 67
		},
		"registered": {
			"date": "2010-02-12T16:25:18.685Z",
			"age": 12
		},
		"phone": "975-713-754",
		"cell": "607-721-391",
		"id": {
			"name": "DNI",
			"value": "10539486-K"
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/16.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
		},
		"nat": "ES"
	}, {
		"gender": "female",
		"name": {
			"title": "Mrs",
			"first": "Savannah",
			"last": "Graves"
		},
		"location": {
			"street": {
				"number": 663,
				"name": "W Sherman Dr"
			},
			"city": "Seagoville",
			"state": "Maryland",
			"country": "United States",
			"postcode": 23897,
			"coordinates": {
				"latitude": "-81.2573",
				"longitude": "95.8736"
			},
			"timezone": {
				"offset": "+3:00",
				"description": "Baghdad, Riyadh, Moscow, St. Petersburg"
			}
		},
		"email": "savannah.graves@example.com",
		"login": {
			"uuid": "b335e220-84e7-4da6-bd57-81ed6243a00f",
			"username": "ticklishwolf989",
			"password": "rebel",
			"salt": "smPcc8JO",
			"md5": "809307b3554ccc9a8b93744384bff8a9",
			"sha1": "762a62b1634a745d36a950be39bc5f196986d739",
			"sha256": "88559be6417d33b3a4cb559ec11a1a9cf8af1365100e9592eaadcf64b056ca03"
		},
		"dob": {
			"date": "1988-01-22T07:37:28.951Z",
			"age": 34
		},
		"registered": {
			"date": "2018-11-11T14:24:37.292Z",
			"age": 4
		},
		"phone": "(555)-971-2871",
		"cell": "(217)-945-8456",
		"id": {
			"name": "SSN",
			"value": "654-28-6781"
		},
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/55.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/55.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/55.jpg"
		},
		"nat": "US"
	}],
	"info": {
		"seed": "b5f52733040d4726",
		"results": 2,
		"page": 1,
		"version": "1.3"
	}
}
console.log(user.results[0].location);