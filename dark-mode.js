const body = document.body;
const button = document.getElementById("darkModeToggle");

// initialization
if (localStorage.getItem("theme") === "dark") {
  // enable dark mode if the local storage stores dark mode as preference
  body.classList.add("dark-mode");

  button.textContent = "Light Mode";
} else {
  button.textContent = "Dark Mode";
}

// interaction
button.addEventListener("click", () => {
  // enable darkmode
  body.classList.toggle("dark-mode");

  // save preference
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );

  // change button text
  button.textContent = body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});
