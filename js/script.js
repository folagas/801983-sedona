var link = document.querySelector(".mybutton-order");
var popup = document.querySelector(".hotel-choice-popup");

link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.toggle("popup-hide");
});
