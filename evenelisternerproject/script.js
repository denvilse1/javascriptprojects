//Event Listeners

//? element>addEventListener("click",funciton);

const buttontwo = document.querySelector(".btn-2");
const buttonthree = document.querySelector(".btn-3");

//creating a call back function
function alertBtn() {
  alert(
    "i also love javaScript , this message created using add event listener"
  );
}

buttontwo.addEventListener("click", alertBtn);

buttonthree.addEventListener("click", alertBtn);

//!MouseOver event

const newBackgroundColor = document.querySelector(".btn3");

function changeBgColor() {
  if (newBackgroundColor) {
    // Check if an element was found
    function changeBgColor() {
      newBackgroundColor.style.backgroundColor = "blue";
    }

    newBackgroundColor.addEventListener("mouseover", changeBgColor);
  } else {
    console.warn("No element with class '.btn3' found.");
  }
}

newBackgroundColor.addEventListener("click", changeBgColor);

//!Adding and removing using button click

const Addremoveclass = document.querySelector(".btn1");
const removeClass = document.querySelector(".add-Class");

function clickButton() {
  Addremoveclass.classList.add("btn1-add-remove");
  removeClass.classList.remove("btn1-add-remove");
  console.log("adding class");
}

function Addclass() {
  Addremoveclass.classList.remove("btn1-add-remove");
  removeClass.classList.add("btn1-add-remove");
}

Addremoveclass.addEventListener("click", clickButton);

removeClass.addEventListener("click", Addclass);
