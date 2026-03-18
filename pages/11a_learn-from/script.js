import gsap from "gsap";

gsap.from ('.card', {
    y: 60,
    opacity: 0,
    scale: 0.95,
    duration: 0.5,
    ease: "power4.out",
    stagger: 0.2,
}
)