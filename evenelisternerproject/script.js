//Event Listeners

//? element>addEventListener("click",funciton);

const buttontwo = document.querySelector(".btn-1");
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
