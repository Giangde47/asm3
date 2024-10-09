"use strict";
function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  const errorEmail = document.getElementById("error-email");
  const checkEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  console.log("check value email", emailValue);

  const check = emailValue.match(checkEmail);
  console.log("email", check);

  const sectionContent = document.querySelector("#info .section-content");
  console.log("check section", sectionContent);

  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng email";
  }
}

function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLowerCase();
  const errorEmail = document.getElementById("error-email");
  const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simplified regex
  console.log("check value email", emailValue);

  const check = checkEmail.test(emailValue);
  console.log("email", check);

  const sectionContent = document.querySelector("#info .section-content");
  console.log("check section", sectionContent);

  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng email";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}
function handleOnMouseout(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  } 
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".control-view");
  const sectionContent = parentElement.querySelectorAll(".section-content");

  if (viewMore.classList.value.includes("view-more")) {
    const sectionContent = parentElement.querySelectorAll(".section-content");
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("less-more");
    viewMore.innerHTML = "Less More";

  } else {
    const sectionContent = parentElement.querySelectorAll(".section-content");
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("less-more");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View More";

  }
}