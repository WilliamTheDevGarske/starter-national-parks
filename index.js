// console.log(document)

// const heading = document.querySelector("h1")
// console.log(heading)

// const firstValue = document.querySelector(".value")
// console.log(firstValue)

// const firstButton = document.querySelector("button")
// console.log(firstButton)

// const foundDiv = document.querySelector("div .stat")
// console.log(foundDiv)

// const foundHello = document.querySelector(".hello")
// console.log(foundHello)

// const allButtons = document.querySelectorAll("button")
// console.log(allButtons)

// const heading3List = document.querySelectorAll("h3")

// for (let element of heading3List.values()){
//     // console.log(element)
// }

// const allRatingDivs = document.querySelectorAll("div .rating-display")

// for (let element of allRatingDivs.values()){
//     console.log(element)
// }

// const allAreaDivs = document.querySelectorAll("div .area-display")

// for(let i = 0; i < allAreaDivs.length; i++){
//     const element = allAreaDivs[i];
//     console.log(element)
// }

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
    let content = desc.innerText;
    
    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + `<a href="">...</a>`;
      }
    
      desc.innerHTML = content;
  }


//   const ratings = document.querySelectorAll(".rating-display .value");

//   for( let rating of ratings){
//     let ratingValue = parseFloat(rating.innerText);
//     // console.log(ratingValue)
//     if (ratingValue > 4.7){
//         // rating.style.fontWeight = "bold";
//         // rating.style.color = '#3ba17c'
// rating.classList.add("high-rating")
// rating.classList.remove("value")

//     }
//   }

  const parks = document.querySelectorAll(".park-display");
  const numberParks = parks.length;
  const newElement = document.createElement("div");
  newElement.innerText = `${numberParks} exciting parks to visit!`;

  newElement.classList.add("header-statement");

  const header = document.querySelector("header");
  header.appendChild(newElement);



  const main = document.querySelector("main");

  const park = main.querySelector(".park-display");

  // main.removeChild(park);

  // const firstBtn = document.querySelector("button");
  // firstBtn.addEventListener("click", (event) => {
  //   console.log(event.target);
  // });


  // Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    btn.style.backgroundColor = "yellow"
  });
});



// Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

const sortByRating = (parkA,parkB) => {
  const parkARating = Number(parkA.querySelector(".rating-display .value").innerText);
  const parkBRating = Number(parkB.querySelector(".rating-display .value").innerText);
return parkBRating - parkARating;
}

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

const ratingSorterClickHandler = (event)=>{
  event.preventDefault() //this prevents the a tag from reloading the page when clicked

  //select the parent of the sections -> main
  const main = document.querySelector("main");

  //select all the sections so that we can sort them
  const parksList = document.querySelectorAll(".park-display");

  //clear out main so that the park sections inside are gone and we can replace it with newly sorted parkList
  main.innerHTML = "";

  //convert the nodelist parksList to an array
  const parksArray = Array.from(parksList)
  
  // Sort the array
  parksArray.sort(sortByRating);

  //loop through the sorted parksArray to append each section in the array as a child to main

  parksArray.forEach((parkSection)=>{
    main.appendChild(parkSection);
  })
} 

const nameSorter = document.querySelector("#name-sorter");

const ratingSorter = document.querySelector("#rating-sorter")

// Add an event listener
nameSorter.addEventListener("click", nameSorterClickHandler);
ratingSorter.addEventListener("click",ratingSorterClickHandler)


console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");