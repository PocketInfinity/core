// Get hamburger element
var hamburger = document.getElementById("hamburger");

// get aside
var aside = document.getElementById("aside");

// Ge email input Div
var email = document.getElementById("emailInput");

// get error message
var error = document.getElementById("errorMsg");

// get aside wrapper
var asideWrapper = document.getElementById("aside-wrapper");

// get aside close button
var closeAsideBtn = document.getElementsByClassName("closeAsideBtn")[0];

// Get newsletter confirmation div
var newsletter = document.getElementById("newsletter-confirm");

// Get newsletter button
var footerForm = document.getElementById("footer-form");

// Get news button div
var newsBtn = document.getElementById("news-button");

// Listen for hamburger click
hamburger.addEventListener("click", openAside);

// listen for Outside Click
window.addEventListener("click", outsideClick);

// Listen for close aside click
closeAsideBtn.addEventListener("click", closeAside);

// function to close aside
function openAside() {
  asideWrapper.style.display = "none";
}

// Function to open aside
function openAside() {
  asideWrapper.style.display = "block";
}

// function to close aside
function closeAside() {
  asideWrapper.style.display = "none";
}

function newsDisplay() {
  "running";
  if (email.value == "") {
    console.log("not a valid email");
    error.style.display = "block";
    setTimeout(() => error.remove(), 3000);
  } else {
    newsletter.style.display = "block";
    footerForm.style.display = "none";
  }
}

// Function to close modal if outside click
function outsideClick(e) {
  if (e.target == asideWrapper) {
    asideWrapper.style.display = "none";
  }
}
