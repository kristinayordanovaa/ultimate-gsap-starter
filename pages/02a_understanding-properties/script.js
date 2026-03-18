import gsap from 'gsap';
gsap.to ('.box', {
    x: -200,
    y: -200,
    opacity:1,
    rotation:360,
    background: '#ff6f61',
    borderRadius: '50%',
    scale: 1,
    duration: 2,
    ease: 'bounce',
    repeat: -1,
}
)