
// Age verification modal
const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
  if (localStorage.getItem("ageConfirmed") != "true") {
    ageModal.style.display = "flex";
  } else {
    ageModal.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  localStorage.setItem("ageConfirmed", "true");
  ageModal.style.display = "none";
});

noBtn.addEventListener("click", () => {
  alert("Dostęp zabroniony. Strona tylko dla osób 18+");
  window.close();
  window.location.href = "https://www.google.pl";
});

// Hide the top warning when the page is scrolled
const warn = document.querySelector(".warn");
if (warn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      warn.style.display = "none";
    } else {
      warn.style.display = "";
    }
  });
}