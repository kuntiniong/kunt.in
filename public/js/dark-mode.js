const body = document.body;
const button = document.getElementById("darkModeToggle");
const icon = button.querySelector(".dark-mode-icon");
const portrait = document.getElementById("portrait");
const projectImg = document.querySelectorAll('.project-image img');

const urlArr = ["assets/images/kun.png", "assets/images/kun_darkmode.png"];
const filterArr = ["none", "invert(88%)"]

// Initialization
if (localStorage.getItem("theme") === "dark") {
  // enable dark mode if saved in localStorage
  body.classList.add("dark-mode"); // change theme
  icon.className = "dark-mode-icon light_mode"; // change icon
  if (portrait) {
    portrait.src = urlArr[1];
  }
  if (projectImg) {
    projectImg.forEach(img => {
      img.style.filter = filterArr[1]; // invert
    });
  }
} else {
  icon.className = "dark-mode-icon dark_mode";
}

// Interaction
button.addEventListener("click", () => {
  // toggle dark mode
  body.classList.toggle("dark-mode");

  // save preference
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // update button icon
  icon.className = isDarkMode ? "dark-mode-icon light_mode" : "dark-mode-icon dark_mode";

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
