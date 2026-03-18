import gsap from 'gsap';
const bars = document.querySelectorAll('.bar');

bars.forEach((bar, index) => {
    gsap.fromTo(bar, {
        scaleY: 0.5,

    },
    {
        scaleY: 1.6,
        ease: "sine.inOut",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        delay: index * 0.1
    })
});