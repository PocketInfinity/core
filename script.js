document
  .getElementsByClassName("footer-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    var element = document.getElementsByClassName("newsletter-confirm");
    // Change display from 'none' to 'block'
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
    } else {
      element.style.display = "none"; // Optional: Toggle back to none
    }
  });
