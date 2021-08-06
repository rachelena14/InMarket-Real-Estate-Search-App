const results = document.querySelector(".home-results")


const searchFormHandler = async (event) => {
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
		  const data = await res.json();
		  console.log(data.user_id);
		  console.log(data.homes);
		  //return homes;

		  data.homes.forEach(home => {
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
			  if(home.primary_photo.href) {
				photoEl.setAttribute("src", home.primary_photo.href);
				divImgEl.append(photoEl);
			  }
			  
			  let divContentEl = document.createElement("div");
			  divContentEl.setAttribute("class", "card-content");
			  divCardEl.append(divContentEl);

			  let addressEl = document.createElement("p");
			  addressEl.innerHTML = "<b>Address:</b> " + home.location.address.line + ", " + home.location.address.city + ", " + home.location.address.state_code + ", " + home.location.address.postal_code
			  addressEl.setAttribute("class", "address");
			  divContentEl.append(addressEl);

			  let listPriceEl = document.createElement("p");
			  listPriceEl.innerHTML = "<b class='list-price'>Listing Price:</b> $" + home.list_price;

			  divContentEl.append(listPriceEl);

			  let bedEl = document.createElement("p");
			  bedEl.innerHTML = "<b>Beds:</b> " + home.description.beds;
			  divContentEl.append(bedEl);

			  let bathEl = document.createElement("p");
			  bathEl.innerHTML = "<b>Baths:</b> " + home.description.baths;
			  divContentEl.append(bathEl);

			  let garageEl = document.createElement("p");
			  garageEl.innerHTML = "<b>garage:</b> " + home.description.garage + " car";
			  divContentEl.append(garageEl);

			  let storiesEl = document.createElement("p");
			  storiesEl.innerHTML = "<b>stories:</b> " + home.description.stories;
			  divContentEl.append(storiesEl);

			  let homeTypeEl = document.createElement("p");
			  homeTypeEl.innerHTML = "<b>Type:</b> " + home.description.type;
			  divContentEl.append(homeTypeEl);

			 




			  
			  let linkEl = document.createElement("a");
			  linkEl.setAttribute("class", "btn-floating btn-large waves-effect waves-light red");
			  divContentEl.append(linkEl);
			  
			  let iconEl = document.createElement("i");
			  iconEl.setAttribute("class", "material-icons");
			  linkEl.append(iconEl);

		      let iconTextEl = document.createElement("p");
			  iconTextEl.textContent = "+";
			  iconEl.append(iconTextEl);

			  iconTextEl.setAttribute("data-id", data.user_id);
			  iconTextEl.setAttribute("id", "save");

		  });

		} else {
		  alert('Failed to search');
		}
	  }
};

const saveHandler = (event) => {
	if(event.target && event.target.id == "save") {
		console.log(event.target);
		console.log("click");
		event.target.closest(".list-price");
		console.log(event.target.parentNode.parentNode.parentNode.parentNode);
		//childNodes firstchild lastchild children firstelementchild lastelementchild
		//get the text of the element
	}
}

document.querySelector("#searchForm").addEventListener("click", searchFormHandler);
document.addEventListener("click", saveHandler);
console.log("file hooked up");