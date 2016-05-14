var link = document.querySelector(".feedback-btn");
var overlay = document.querySelector(".overlay");
var close = overlay.querySelector(".close-btn");
var form = overlay.querySelector(".form-feedback");
var yourName = overlay.querySelector(".name");
var yourEmail = overlay.querySelector(".email");
var yourComment = overlay.querySelector(".comment");
var storageName = localStorage.getItem("yourName");
var storageEmail = localStorage.getItem("yourEmail");

link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("overlay-show");
  yourName.focus();

  if (storageName && storageEmail) {
    yourName.value = storageName;
    yourEmail.value = storageEmail
    yourComment.focus();
  } 
  else {
    yourName.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (overlay.classList.contains("overlay-show")) {
      overlay.classList.remove("overlay-show");
    }
  }
});

form.addEventListener("submit", function() {
  if (!yourName.value || !yourEmail.value || !yourComment.value) {
    event.preventDefault();
    console.log("Нужно заполнить все поля");
  } 
  else {
    localStorage.setItem("yourName", yourName.value);
    localStorage.setItem("yourEmail", yourEmail.value);
  }
});
