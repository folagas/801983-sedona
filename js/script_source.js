var link = document.querySelector(".mybutton-order");
var popup = document.querySelector(".hotel-choice-popup");

popup.classList.add("popup-hide");
link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.toggle("popup-hide");
});
