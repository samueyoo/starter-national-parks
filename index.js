// console.log(document);
// const heading = document.querySelector("h1");
// console.log(heading);


// const classSelector = document.querySelector(".value");
// const buttonSelector = document.querySelector("button");
// const areaSelector = document.querySelector(".area-display");
// const divChildOfStat = document.querySelector(".stat > div");
// const helloClass = document.querySelector(".hello");

// const selectorArray = [
//     classSelector,
//     buttonSelector,
//     areaSelector,
//     divChildOfStat,
//     helloClass,
//     document.querySelectorAll("button")
// ]

// selectorArray.forEach(selector => {
//     console.log(selector);
// })

//Get a list of all the <div> elements containing ratings
// const ratingDivs = document.querySelectorAll(".rating-display > div");
// const areaDivs = document.querySelectorAll(".area-display > div");
// console.log("All divs children of .rating-display:");
// for (let div of ratingDivs.values()) {
//     console.log(div);
// }
// console.log("All divs children of .area-display:");
// for (let i = 0; i < areaDivs.length; i++) {
//     console.log(areaDivs[i]);
// }

//Truncate each park's description to 250 characters + "..." 
const descriptions = document.querySelectorAll(".description-display");
descriptions.forEach(description => {
    //console.log(description.innerText); //Logs the innerText property
    let descriptionContent = description.innerText;
    if (descriptionContent.length > 250) {
        descriptionContent = descriptionContent.slice(0, 250);
        descriptionContent += "<a href=#>...</a>";    
    }
    //console.log(descriptionContent)
    description.innerHTML = descriptionContent;
})

const parks = document.querySelectorAll(".park-display"); //Return all the parks
const numberOfParks = parks.length; //Measure the length
const numberParksElement = document.createElement("div"); //Create an emepty <div>
numberParksElement.innerText = `${numberOfParks} exciting parks to visit`; //Edit the element's text
numberParksElement.classList.add("header-statement"); //Add our class to the classList
const header = document.querySelector("header"); //Grab and store the header container
header.appendChild(numberParksElement); //Add it as a final child

const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
    console.log(event.target);
})

const allBtns = document.querySelectorAll("button");

allBtns.forEach(btn => {
    btn.addEventListener("click", event => {
        const park = event.target.parentNode;
        park.style.backgroundColor = "#c8e6c9";
    })
})

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

//Refactored so .sort's callback can reference a helper function
const sortByName = (parkA, parkB) => {
    const parkAHeader = parkA.querySelector("h2").innerText;
    const parkBHeader = parkB.querySelector("h2").innerText;
    if (parkAHeader < parkBHeader) { return -1}
    else if (parkAHeader > parkBHeader) {return 1}
    else {return 0};
}

// Add an event listener
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("You clicked the name sorter");
    const main = document.querySelector("main");
    const parks = document.querySelectorAll(".park-display");
    main.innerHTML = "";
    const parksArray = Array.from(parks);
    //console.log(parksArray);
    parksArray.sort(sortByName);
    parksArray.forEach(park => {
        main.appendChild(park);
    })
});

const ratingSorter = document.querySelector("#rating-sorter");

const sortByRating = (parkA, parkB) => {
    const parkARating = parkA.querySelector(".rating-display > .value").innerText;
    const parkBRating = parkB.querySelector(".rating-display > .value").innerText;
    return parkARating - parkBRating;
}

ratingSorter.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("You clicked the rating sorter");
    const main = document.querySelector("main");
    const parks = document.querySelectorAll(".park-display");
    main.innerHTML = "";
    const parksArray = Array.from(parks);
    //console.log(parksArray);
    parksArray.sort(sortByRating);
    parksArray.forEach(park => {
        main.appendChild(park);
    })
});

