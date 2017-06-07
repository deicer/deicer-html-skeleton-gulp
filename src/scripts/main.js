var menuToggle = document.querySelector(".main-nav__toggle");
var menuClosed = document.querySelector(".main-nav");

var loginFormOpened = document.querySelector(".main-nav__login");
var loginForm = document.querySelector(".login-form");
var loginFormClosed = document.querySelector(".login-form__closed");

var formSubmit = document.querySelector(".form__submit");
var formSubmitted = document.querySelector(".form__submitted");
var formSubmittedClose = document.querySelector(".form__submitted-close");


menuToggle.addEventListener("click", function (event) {
    event.preventDefault();
    menuClosed.classList.toggle("main-nav--closed");
    menuClosed.classList.toggle("main-nav--opened");
})


loginFormOpened.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.add("login-form--opened");
    menuClosed.classList.remove("main-nav--opened");
    menuClosed.classList.add("main-nav--closed");
})
loginFormClosed.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.toggle("login-form--opened");
})


formSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    formSubmitted.classList.add("form__submitted--open");
})

formSubmittedClose.addEventListener("click", function (event) {
    event.preventDefault();
    formSubmitted.classList.remove("form__submitted--open");
})
