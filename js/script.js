'use strict';

var mapOpen = document.querySelector(".js-open-map");

var mapPopup = document.querySelector(".modal-popup-map");
var mapClose = mapPopup.querySelector(".modal-close-btn");

var modalOverlay = document.querySelector(".modal-overlay");

mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
  modalOverlay.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
  modalOverlay.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
      modalOverlay.classList.remove("modal-content-show");
    }
  }
});

var writeUs = document.querySelector(".js-write-us");

var writeUsPopup = document.querySelector(".modal-write-us");
var writeUsClose = writeUsPopup.querySelector(".modal-close-btn");

var formWriteUs = writeUsPopup.querySelector("form");
var loginWriteUs = writeUsPopup.querySelector("[name=name]");
var mailWriteUs = writeUsPopup.querySelector("[name=email]");
var textWriteUs = writeUsPopup.querySelector("[name=email-text]");

if (window.localStorage) {
  var storageLogin = localStorage.getItem("name");
  var storageMail = localStorage.getItem("email");
}


writeUs.addEventListener("click", function (event) {
  event.preventDefault();

  writeUsPopup.classList.add("modal-content-show");
  modalOverlay.classList.add("modal-content-show");


  if (storageLogin) {
    loginWriteUs.value = storageLogin;
    mailWriteUs.focus();
  } else {
    loginWriteUs.focus();
  }

  if (storageMail) {
    mailWriteUs.value = storageMail;
    textWriteUs.focus();
  }
});

writeUsClose.addEventListener("click", function (event) {
  event.preventDefault();
  writeUsPopup.classList.remove("modal-content-show");
  modalOverlay.classList.remove("modal-content-show");
  loginWriteUs.classList.remove("modal-error");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-content-show")) {
      writeUsPopup.classList.remove("modal-content-show");
      modalOverlay.classList.remove("modal-content-show");
      loginWriteUs.classList.remove("modal-error");
    }
  }
});

formWriteUs.addEventListener("submit", function (event) {
  if (!loginWriteUs.value) {
    event.preventDefault();
    loginWriteUs.classList.remove("modal-error");
    loginWriteUs.offsetWidht = loginWriteUs.offsetWidth;
    loginWriteUs.classList.add("modal-error");
  } else {
    localStorage.setItem("name", loginWriteUs.value);
  }

  if (!mailWriteUs.value) {
    event.preventDefault();
    loginWriteUs.classList.remove("modal-error");
    loginWriteUs.offsetWidht = loginWriteUs.offsetWidth;
    mailWriteUs.classList.add("modal-error");
  } else {
    localStorage.setItem("email", mailWriteUs.value);
  }
});
