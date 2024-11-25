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

//? adding content to this list item that has been

// Modifying the text

const firstlistItem = document.querySelector(".list-name");

console.log(firstlistItem.innerText);
console.log(firstlistItem.textContent);
console.log(firstlistItem.innerHTML);

// updating the text
li.innerText = "shaktimaan";

//how to add remove or change html element attributes such as classes

//?Modifying Attributes and Classes

li.setAttribute("id", "usingDom");

// Adding classes
li.classList.add("list-name");

//!Traverse the DOM

//Parent Node traverse

console.log(ul.parentNode); // this is giving the parent element/container of the element that we have selected
console.log(ul.parentNode.parentNode);
//This is giving the parent element of the element/container
//! basically giving the parent element of the selected selected element.

const html = document.documentElement;
console.log(html.parentNode); //? This is returning #document
console.log(html.parentElement);

//! child node traversal
console.log(ul.childNodes);

console.log(ul.firstChild);

console.log(ul.lastChild);
//?these firstChild and LastChild returns text as Node or TextNode
