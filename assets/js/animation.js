// Ease-in animation
window.addEventListener("load", () => {
  gsap.to(".context", {
    autoAlpha: 1,
    duration: 1,
    ease: "expoScale.out",
  });
});