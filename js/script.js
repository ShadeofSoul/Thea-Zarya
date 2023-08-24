const button = document.querySelector('.nav_button');
const menu = document.querySelector('.nav_list');

button.addEventListener('click', () => {
  button.classList.toggle('open');
  menu.classList.toggle('nav_active');
});
// ===============================================================

const educationList = document.getElementById("education_list");
const toggleButton = document.getElementById("toggle_button");

for (let i = 6; i < educationList.children.length; i++) {
  educationList.children[i].style.display = "none";
}

toggleButton.addEventListener("click", function() {
  if (toggleButton.classList.contains("expanded")) {
    for (let i = 6; i < educationList.children.length; i++) {
      educationList.children[i].style.display = "none";
    }
    toggleButton.textContent = "Читать далее";
    toggleButton.classList.remove("expanded");
  } else {
    for (let i = 6; i < educationList.children.length; i++) {
      educationList.children[i].style.display = "list-item";
    }
    toggleButton.textContent = "Свернуть";
    toggleButton.classList.add("expanded");
  }
});
// ==========================================================

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
// ===========================================================

    let mask =document.querySelector('.mask');
    window.addEventListener('load', ()=>{
        mask.classList.add('hide')
        mask.style.display = "none";
    }
    )