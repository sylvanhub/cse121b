/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article");
        let title = document.createElement("h3")
        title.innerHTML = temple["templeName"];
        let image = document.createElement("img");
        image.setAttribute("src", temple["imageUrl"]);
        image.setAttribute("alt", temple["location"])
        article.appendChild(title);
        article.appendChild(image);
        templesElement.appendChild(article);
    });
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}


/* reset Function */
let reset = function(){
    templesElement.textContent = " ";
}

/* filterTemples Function */
let filtered = function (temples){
    reset();
    let filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple["location"].includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple["location"].includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple["dedicated"]) <= new Date(1950, 0, 1)));
            break;
        default:
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filtered(templeList)});