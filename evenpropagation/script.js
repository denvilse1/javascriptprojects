window.addEventListener(
  "click",
  function () {
    console.log("window");
  },
  true
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true
);

document.querySelector(".container-1").addEventListener(
  "click",
  function () {
    console.log("div 2");
  },
  true
);

document.querySelector(".container-2").addEventListener(
  "click",
  function () {
    console.log("div 1");
  },
  true
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log((e.target.innerText = "clicked"));
  },
  true
);
