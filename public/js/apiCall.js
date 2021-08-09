//area to display property results
const results = document.querySelector(".home-results");

// function to deal with the city state input and render cards
const searchFormHandler = async (event) => {
  event.preventDefault();

  //get input information
  const city = document.querySelector("#city-input").value.trim();
  const state = document.querySelector("#state-input").value.trim();

  //if we have both then post that info to the axios route
  if (city && state) {
    console.log("searching for " + city, state);
    const res = await fetch("/api/property/getHomes/" + city + "/" + state, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    //if the response is ok then render this card for each property
    if (res.ok) {
      const data = await res.json();

      data.homes.forEach((home) => {
        let divColEl = document.createElement("div");
        divColEl.setAttribute("class", "col s4");
        results.append(divColEl);

        let divCardEl = document.createElement("div");
        divCardEl.setAttribute("class", "card");
        divColEl.append(divCardEl);

        let divImgEl = document.createElement("div");
        divImgEl.setAttribute("class", "card-image");
        divCardEl.append(divImgEl);

        let photoEl = document.createElement("img");
        if (home.primary_photo.href) {
          photoEl.setAttribute("src", home.primary_photo.href);
          photoEl.setAttribute("class", "img-size");
          divImgEl.append(photoEl);
        }

        let divContentEl = document.createElement("div");
        divContentEl.setAttribute("class", "card-content searched-cards");
        divCardEl.append(divContentEl);

        let addressEl = document.createElement("p");
        addressEl.innerHTML =
          "<b>Address:</b> " +
          home.location.address.line +
          ", " +
          home.location.address.city +
          ", " +
          home.location.address.state_code +
          ", " +
          home.location.address.postal_code;
        addressEl.setAttribute("class", "address");
        divContentEl.append(addressEl);

        let listPriceEl = document.createElement("p");
        listPriceEl.innerHTML =
          "<b class='list-price'>Listing Price:</b> $" + home.list_price;
        divContentEl.append(listPriceEl);

        let bedEl = document.createElement("p");
        bedEl.innerHTML = "<b>Beds:</b> " + home.description.beds;
        divContentEl.append(bedEl);

        let bathEl = document.createElement("p");
        bathEl.innerHTML = "<b>Baths:</b> " + home.description.baths;
        divContentEl.append(bathEl);

        let garageEl = document.createElement("p");
        if (home.description.garage == null) {
          garageEl.innerHTML = "<b>garage:</b> N/A";
          divContentEl.append(garageEl);
        } else {
          garageEl.innerHTML =
            "<b>garage:</b> " + home.description.garage + " car";
          divContentEl.append(garageEl);
        }

        let storiesEl = document.createElement("p");
        storiesEl.innerHTML = "<b>stories:</b> " + home.description.stories;
        divContentEl.append(storiesEl);

        let homeTypeEl = document.createElement("p");
        if (home.description.type == "single_family") {
          homeTypeEl.innerHTML = "<b>Type:</b> single family";
          divContentEl.append(homeTypeEl);
        } else {
          homeTypeEl.innerHTML = "<b>Type:</b> multi family";
          divContentEl.append(homeTypeEl);
        }

        let sqftEl = document.createElement("p");
        sqftEl.innerHTML = "<b>Sq. Ft.:</b> " + home.description.sqft;
        divContentEl.append(sqftEl);

        let yearBuiltEl = document.createElement("p");
        yearBuiltEl.innerHTML =
          "<b>Year Built:</b> " + home.description.year_built;
		  divContentEl.append(yearBuiltEl);

        let linkEl = document.createElement("a");
        linkEl.setAttribute(
          "class",
          "btn-floating btn-large waves-effect waves-light red icon-top-margin plus-size"
        );
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
      alert("Failed to search");
    }
  }
};

//function to save the home to the database
const saveHandler = async (event) => {
	let card = event.target.parentNode.parentNode.parentNode.parentNode
	let currentHome = {}
	let user_id = event.target.dataset.id

  if (event.target && event.target.id == "save") {
	currentHome.image = card.children[0].children[0].currentSrc;
	currentHome.address = card.children[1].childNodes[0].textContent.split(":")[1];
	currentHome.list_price = card.children[1].childNodes[1].textContent.split(":")[1];
	currentHome.beds = card.children[1].childNodes[2].textContent.split(":")[1];
	currentHome.baths = card.children[1].childNodes[3].textContent.split(":")[1];
	currentHome.garage = card.children[1].childNodes[4].textContent.split(":")[1];
	currentHome.stories = card.children[1].childNodes[5].textContent.split(":")[1];
	currentHome.home_type = card.children[1].childNodes[6].textContent.split(":")[1];
	currentHome.sqft = card.children[1].childNodes[7].textContent.split(":")[1];
	currentHome.year_built = card.children[1].childNodes[8].textContent.split(":")[1];

	console.log(currentHome);

	card.remove();
	await fetch("/api/property/saveHome/" + user_id, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(currentHome),
	  });

	  //add button for this redirect
	  //document.location.replace("/dashboard")
  }
};

//eventlisteners
document
  .querySelector("#searchForm")
  .addEventListener("click", searchFormHandler);
document.addEventListener("click", saveHandler);
console.log("file hooked up");
