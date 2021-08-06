const results = document.querySelector(".home-results")


const seachFormHandler = async (event) => {
	event.preventDefault();

	const city = document.querySelector('#city-input').value.trim();
    const state = document.querySelector('#state-input').value.trim();

	if (city && state) {
		console.log("searching for " + city, state);
		const res = await fetch('/api/property/getHomes/' + city + '/' + state, {
		  method: 'GET',
		  headers: { 'Content-Type': 'application/json' },
		});
	
		if (res.ok) {
		  //document.location.replace('/dashboard/searched');
		  const homes = await res.json();
		  console.log(homes);
		  //return homes;

		  homes.forEach(home => {
			  let divColEl = document.createElement("div");
			  divColEl.setAttribute("class", "col s4")
			  results.append(divColEl)
			
			  let divCardEl = document.createElement("div");
			  divCardEl.setAttribute("class", "card");
			  divColEl.append(divCardEl);

			  let divImgEl = document.createElement("div");
			  divImgEl.setAttribute("class", "card-image");
			  divCardEl.append(divImgEl);

			  let photoEl = document.createElement("img");
			  photoEl.setAttribute("src", home.home_photos.collection[0].href);
			  divImgEl.append(photoEl);

			  let divContentEl = document.createElement("div");
			  divContentEl.setAttribute("class", "card-content");
			  divCardEl.append(divContentEl);

			  let addressEl = document.createElement("p");
			  addressEl.textContent = home.location.address.line + ", " + home.location.address.city + ", " + home.location.address.state_code + ", " + home.location.address.postal_code
			  divContentEl.append(addressEl);

			  let listPriceEl = document.createElement("p");
			  listPriceEl.textContent = home.list_price
			  divContentEl.append(listPriceEl);

			  
		  });

		} else {
		  alert('Failed to search');
		}
	  }
};


document.querySelector("#searchForm").addEventListener("click", seachFormHandler);
console.log("file hooked up");