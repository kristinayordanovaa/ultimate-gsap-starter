import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "back.out(1.7)",
    onComplete: () => {
      gsap.to(".toast", {
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: "back.in(1.7)",
        delay: 2,
      });
    }
  });
};

showToastLoop();