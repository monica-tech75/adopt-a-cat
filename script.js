const animalsToAdopt = [
  {
    name: "Lucky",
    picture: "https://d2zp5xs5cp8zlg.cloudfront.net/image-83814-800.jpg",
  },
  {
    name: "Symba",
    picture:
      "https://content.api.news/v3/images/bin/ff9af9eead6564b194d0b723e752d831",
  },
  {
    name: "Léo",
    picture: "https://i.redd.it/ket76730w05a1.jpg",
  },
  {
    name: "Milo",
    picture:
      "https://s.yimg.com/ny/api/res/1.2/C5uryMno9srLXTTHJWNllw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://s.yimg.com/os/en_US/News/BGR_News/funny-cat.jpg",
  },
  {
    name: "Charly",
    picture: "https://media.tenor.com/9YGa6pkKJ5YAAAAM/muh-cat.gif",
  },
];
//console.log(animalsToAdopt);
// Each card will have a different title and a different imageUrl.

// To create new DOM elements, we have to use document.createElement(). We add a couple of example on how to proceed.

// const card = document.createElement("div");
// card.classList.add("card");
// cards.appendChild(card);
// You have to create the element, then add the right class, and finally, add the element to its parent.

// Look at the example, and create the missing elements:

// cardBody: a div with the class card-body added to card
// cardTitle: a h2 with the class card-title, change the innerHTML with the title argument and add it to the cardBody
// cardButton: a button with the class card-button, the InnerHTML "Adopt Now" and add it to the cardBody
// Once you've finished, now, create a for loop, that goes through the animalsToAdopt array and create one card for every element of the array.

/
const cards = document.querySelector(".cards");

animalsToAdopt.forEach((animal) => {
  // Create the card
  const card = document.createElement("div");
  card.classList.add("card");
  //Create the card header
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  //Create card-img
  const cardImg = document.createElement("div");
  cardImg.classList.add("card-img");
  cardImg.style.backgroundImage = `url(${animal.picture})`;
  // Create card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Create cardTitle
  const cardTitle = document.createElement("h2");
  cardTitle.innerHTML = animal.name;
  // Create card-button
  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.textContent = "Adopt now";

  // Append everything inside respective divs

  cards.appendChild(card);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardButton);
  cardHeader.appendChild(cardImg);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
});


