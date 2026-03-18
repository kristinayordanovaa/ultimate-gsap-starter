import gsap from 'gsap';

gsap.set ('.gsap-box', {y: 100, opacity: 0, scale: 0.5});
gsap.to ('.gsap-box', {
    delay: 0.5,
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: 'expo.out',
    stagger: 0.2
});