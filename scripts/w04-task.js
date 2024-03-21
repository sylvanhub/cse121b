/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Odeh Sylvester",
    photo: "images/sylvan.jpg",
    placesLived: [],
    hobbies: ["reading", "sleeping", "playing with numbers and codes",],
    favouriteFood: [ " white Rice with chicken","Eba with ewsu soup", "pounded yam with egusi soup", "ogbono soup with eba", "beans with plantain", "moi moi"   ]
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Ibadan Nigeria",
        length: "8 years",
    },

    {
        place : "Benue Nigeria",
        length :"1 year",
    },
    {

        place:"Freetown SierraLeon",
        length: "1 year"
    },
    {
        place: "Abeokuta Nigeria",
        length: "20 years",
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;


/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.photo);


/* Favorite Foods List*/
myProfile.favouriteFood.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);

});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
}
);


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    let dlElement = document.getElementById("places-lived");
    dlElement.appendChild(dt);
    dlElement.appendChild(dd);
});