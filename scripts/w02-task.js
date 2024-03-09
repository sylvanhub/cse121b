/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Odeh Sylvester";
let currentYear = "2024";
let profilePicture = "images/sylvan.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.getElementById("year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let favouriteFood = ["Yam with egg source", "pounded yam with egusi soup", "Apple", "Rice with stew", "Beans with plantain" ,"ogbono soup with goat meat and ponmo"];

let newFood = "fried potato with beans and stew";

favouriteFood.shift();
favouriteFood.pop();
favouriteFood.forEach(food => {
    foodElement.innerHTML += `<div>${food}</div>`;
});