const body = document.body;
const button = document.getElementById("darkModeToggle");
const icon = button.querySelector(".material-symbols-outlined");
const portrait = document.getElementById("portrait");
const projectImg = document.querySelectorAll('.project-image img');

const urlArr = ["images/kun.png", "images/kun_darkmode.png"];
const filterArr = ["none", "invert(88%)"]

// Initialization
if (localStorage.getItem("theme") === "dark") {
  // enable dark mode if saved in localStorage
  body.classList.add("dark-mode"); // change theme
  icon.textContent = "light_mode"; // change icon
  if (portrait) {
    portrait.src = urlArr[1];
  }
  if (projectImg) {
    projectImg.forEach(img => {
      img.style.filter = filterArr[1]; // invert
    });
  }
} else {
  icon.textContent = "dark_mode";
}

// Interaction
button.addEventListener("click", () => {
  // toggle dark mode
  body.classList.toggle("dark-mode");

  // save preference
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // update button icon
  icon.textContent = isDarkMode ? "light_mode" : "dark_mode";

  // update portrait
  if (portrait) {
    portrait.src = urlArr[Number(isDarkMode)];
  }
  if (projectImg) {
    projectImg.forEach(img => {
      img.style.filter = filterArr[Number(isDarkMode)]; // invert
    });
  }
});
