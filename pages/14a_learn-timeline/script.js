import gsap from 'gsap';
const animateBox = () => {
    const tl = gsap.timeline();

    tl.set('data-id="1"', {
        y:0
    });
    tl.set('data-id="2"', {
        y:0
    });

    tl.to('data-id="1"', {
        y:200,
        duration:1,
    });
    tl.to('data-id="2"', {
        y:200,
        duration:1,
    });
}
animateBox();
