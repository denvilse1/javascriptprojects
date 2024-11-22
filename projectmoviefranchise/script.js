// DOM manipulation

// GetElementById()
// const title = document.getElementById("main-heading");
// console.log(title);
// //?return the whole element

//getElementByClassName()
// const listItem = document.getElementsByClassName("list-name");
// console.log(listItem);

//getElementByTagName()
// const listItem1 = document.getElementsByTagName("li");
// console.log(listItem1);

//querySelector()

// const container = document.querySelector("div");
// console.log(container);
// //! if the you want to use

// //! Tag:use the name of the tag as it is.

// //!class:use class name with dot
//querySelectorAll()

const title = document.querySelector("#main-heading");
title.style.color = "red";
console.log(title);

const listname = document.querySelectorAll(".list-name");
console.log(listname);

for (i = 0; i < listname.length; i++) {
  listname[i].style.fontSize = "2rem";
}

//!Creating elements

const ul = document.querySelector("ul");
const li = document.createElement("li");
//? The above element will not do anything

ul.append(li); // it's working
