const button = document.querySelector(".nav_button");
const menu = document.querySelector(".nav_list");

button.addEventListener("click", () => {
  button.classList.toggle("open");
  menu.classList.toggle("nav_active");
});
// ===============================================================

const educationList = document.getElementById("education_list");
const toggleButton = document.getElementById("toggle_button");
const sectionEdu = document.getElementById("education");

toggleButton.addEventListener("click", () => {
  educationList.classList.toggle("show_block");
  if (educationList.classList.contains("show_block")) {
    sectionEdu.style.marginBottom = "165px";
    toggleButton.innerText = "Свернуть";
  } else {
    sectionEdu.style.marginBottom = "0px";
    toggleButton.innerText = "Читать далее";
  }
});
// ==========================================================

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if (!faq.classList.contains("active")) {
      faqs.forEach((faq) => faq.classList.remove("active"));
    }
    faq.classList.toggle("active");
  });
});
// ===========================================================

let mask = document.querySelector(".mask");
window.addEventListener("load", () => {
  mask.classList.add("hide");
  mask.style.display = "none";
});
//  ================
const menuLinks = document.querySelectorAll('header .nav_menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    if( button.classList.contains("open")){
      button.classList.remove("open");
      menu.classList.remove("nav_active");
    }
  });
});
