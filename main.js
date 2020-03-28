const responsiveContainer = document.getElementById("menu-popup");
const buttonShowContainer = document.getElementById("nav");
const closeButtonContainer = document.getElementById("close-icon");

buttonShowContainer.addEventListener("click", function() {
  responsiveContainer.style.display = "block";
  buttonShowContainer.style.display = "none";
});

closeButtonContainer.addEventListener("click", function() {
  responsiveContainer.style.display = "none";
  buttonShowContainer.style.display = "block";
});
