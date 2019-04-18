// function myFunction(x) {
//   x.classList.toggle("change");
//   var x = document.getElementById("links");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

var links = document.getElementById("links");
var hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("change");
  links.classList.toggle("nav_mobile");
});
