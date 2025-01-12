const body = document.body;
const button = document.getElementById("darkModeToggle");
const icon = button.querySelector(".material-symbols-outlined");

// Initialization
if (localStorage.getItem("theme") === "dark") {
  // enable dark mode if saved in localStorage
  body.classList.add("dark-mode"); // change theme
  icon.textContent = "light_mode"; // change icon
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
});
