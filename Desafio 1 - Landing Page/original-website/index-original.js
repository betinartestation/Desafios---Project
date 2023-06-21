var arrowLeft = window.document.getElementById("arrow-left");
var firstImage = window.document.getElementById("img-1");
var secondImage = window.document.getElementById("img-2");
var arrowRight = window.document.getElementById("arrow-right");

function ScrollRight() {
  arrowRight.style = "visibility: hidden"
  firstImage.style = "display: none"
  secondImage.style = "display: flex"
  arrowLeft.style = "visibility: visible"
}

function ScrollLeft() {
  arrowRight.style = "visibility: visible"
  firstImage.style = "display: flex"
  secondImage.style = "display: none"
  arrowLeft.style = "visibility: hidden"
}
