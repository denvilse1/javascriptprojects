//Event Listeners

//? element>addEventListener("click",funciton);

const buttontwo = document.querySelector(".btn2");
const buttonthree = document.querySelector(".btn3");

//creating a call back function
function alertBtn() {
  alert(
    "i also love javaScript , this message created using add event listener"
  );
}

buttontwo.addEventListener("click", alertBtn);

buttonthree.addEventListener("click", alertBtn);
