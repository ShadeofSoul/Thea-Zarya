const button = document.querySelector('.nav_button');
const menu = document.querySelector('.nav_list');

button.addEventListener('click', () => {
  button.classList.toggle('open');
  menu.classList.toggle('nav_active');
});


const educationList = document.getElementById("education_list");
const toggleButton = document.getElementById("toggle_button");

// Скрытие всех пунктов списка, кроме первых шести
for (let i = 6; i < educationList.children.length; i++) {
  educationList.children[i].style.display = "none";
}

// Обработчик события клика на кнопку
toggleButton.addEventListener("click", function() {
  // Проверяем текущее состояние списка
  if (toggleButton.classList.contains("expanded")) {
    // Свернуть список
    for (let i = 6; i < educationList.children.length; i++) {
      educationList.children[i].style.display = "none";
    }
    toggleButton.textContent = "Читать далее";
    toggleButton.classList.remove("expanded");
  } else {
    // Развернуть список
    for (let i = 6; i < educationList.children.length; i++) {
      educationList.children[i].style.display = "list-item";
    }
    toggleButton.textContent = "Свернуть";
    toggleButton.classList.add("expanded");
  }
});

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});