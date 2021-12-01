

async function getBrook() {

	let dataName = await fetch('http://techi.envivent.com/names.json')
	let content_1  = await dataName.json()
	console.log(content_1.employees[1]) 

	let dataDesc = await fetch('http://techi.envivent.com/description.json')
	let content_2  = await dataDesc.json()      
	console.log(content_2.employees[1])

	let dataImg = await fetch('http://techi.envivent.com/images.json')
	let content_3  = await dataImg.json()         
	console.log(content_3.employees[1])

	let container = document.querySelector('.screen-2__json-1')

	let key;

	for (key in content_1) {

		container.innerHTML = `
			<div class="screen-2__container-text-1">
				<div class="screen-2__container-titles">
					<h2>${content_1.employees[1].first_name} ${content_1.employees[1].last_name}</h2>
					<h3>${content_2.employees[1].title}</h3>
				</div>	
				<p>${content_2.employees[1].description}</p>
			</div>
			<img src="${content_3['images-folder']}${content_3.employees[1].full}" alt="" class="screen-2__img-1">
		`
	}

}

getBrook()

async function getJake() {

	let dataName = await fetch('http://techi.envivent.com/names.json')
	let content_1  = await dataName.json()
	console.log(content_1.employees[1]) 

	let dataDesc = await fetch('http://techi.envivent.com/description.json')
	let content_2  = await dataDesc.json()      
	console.log(content_2.employees[1])

	let dataImg = await fetch('http://techi.envivent.com/images.json')
	let content_3  = await dataImg.json()         
	console.log(content_3.employees[1])

	let container = document.querySelector('.screen-2__json-2')

	let key;

	for (key in content_1) {

		container.innerHTML = `
			<div class="screen-2__container-text-2">
				<div class="screen-2__container-titles">
					<h2>${content_1.employees[4].first_name} ${content_1.employees[1].last_name}</h2>
					<h3>${content_2.employees[4].title}</h3>
				</div>
				<p>${content_2.employees[4].description}</p>
			</div>	
			<div class="screen-2__container-titles">
			<img src="${content_3['images-folder']}${content_3.employees[4].full}" alt="" class="screen-2__img-2">
		`
	}

}

getJake()

async function getAllef() {

	let dataName = await fetch('http://techi.envivent.com/names.json')
	let content_1  = await dataName.json()
	console.log(content_1.employees[1]) 

	let dataDesc = await fetch('http://techi.envivent.com/description.json')
	let content_2  = await dataDesc.json()      
	console.log(content_2.employees[1])

	let dataImg = await fetch('http://techi.envivent.com/images.json')
	let content_3  = await dataImg.json()         
	console.log(content_3.employees[1])

	let container = document.querySelector('.screen-2__json-3')

	let key;

	for (key in content_1) {

		container.innerHTML = `
			<div class="screen-2__container-text-3">
				<div class="screen-2__container-titles">
					<h2>${content_1.employees[0].first_name} ${content_1.employees[1].last_name}</h2>
					<h3>${content_2.employees[0].title}</h3>
				</div>
				<p>${content_2.employees[0].description}</p>
			</div>
			<img src="${content_3['images-folder']}${content_3.employees[0].full}" alt="" class="screen-2__img-3">
		`
	}

}

getAllef()



