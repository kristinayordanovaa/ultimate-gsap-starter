import gsap from "gsap";
const button = document.querySelector(".scroll-to-top ");
let isFloating = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    button.classList.add("show");
    if (!isFloating) {
      gsap.to(button, { 
        y: -10, 
        duration: 0.2, 
        repeat: -1,
        yoyo: true,
        ease: "sine.out" });
        isFloating = true;
    }
  } else {    button.classList.remove("show");
  }
});

button.addEventListener("mouseenter", () => {
  if (isFloating) {
    gsap.to(button, { 
        scale: 1.2,
        duration: 0.2, 
 });
  }
});