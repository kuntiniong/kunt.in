// Ease-in animation
window.addEventListener("load", () => {
  gsap.to(".context", {
    autoAlpha: 1,
    duration: 1,
    ease: "expoScale.out",
  });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select all paths and rectangles in the SVG
  const elements = document.querySelectorAll(".kun-svg path, .kun-svg rect");

  // Loop through each element
  elements.forEach((el) => {
    // Get the total length of the element
    const length = el.getTotalLength();

    // Set the length as a CSS variable for use in dasharray and dashoffset
    el.style.setProperty("--path-length", length);
  });
});
