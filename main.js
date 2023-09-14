// let body = document.body;
// let light = document.createElement('div');
// light.style.position = 'absolute';
// light.style.background = 'yellow';
// light.style.opacity = '0';
// light.style.transition = 'opacity .7s';
// light.style.width = '100vw';
// light.style.height = '100vh';
// light.style.top = '0';
// light.style.left = '0';
// body.appendChild(light);

// let increaseLight = function() {
//     let opacity = parseFloat(light.style.opacity);
//     if(opacity < 1) {
//         light.style.opacity = opacity + 0.02;
//         requestAnimationFrame(increaseLight);
//     } else {
//         light.style.background = 'white'; // Ganeshji's blessings in form of bright light
//     }
// }

// setTimeout(function() {
//     increaseLight();
// }, 10000); // Set timeout of 10 seconds before starting the animation

let circle = document.querySelector('#circle');
const btn = document.querySelector('#preloader');
var tl = gsap.timeline();

window.addEventListener('mousemove', function(dets){
    let Xclient = dets.clientX;
    let Yclient = dets.clientY;

    circle.style.top = `${Yclient}px`;
    
    circle.style.left =`${Xclient}px`;
})

btn.addEventListener('click', function(){
    tl.reverse();
    gsap.to('.char',{
        opacity: 0,
        delay: 1.5,
        duration: 1.5
    })
    gsap.to('#preloader video', {opacity: 0, duration: 3, delay: 2.5});
    gsap.set('#preloader video', {display: 'none', delay: 17.5});})
    gsap.to('#text #btn', {
        opacity: 0,
        duration: 1,
        ease: 'expo.easeInOut',
    })

// GSAP 
if (window.gsap) {
    console.log("GSAP has been successfully added.");
} else {
    console.log("Failed to add GSAP.");
}

//Split-type
if (window.SplitType) {
    console.log("SplitType has been successfully added.");
} else {
    console.log("Failed to add SplitType.");
}



tl
.from('#ganeshji_img img',{
    duration: 2,
    scale: .7,
    ease: 'expo.easeInOut',
    opacity: 0,
    delay: 1
});

var myText = new SplitType('.sloka')

gsap.to('.char',{
    y: 0,
    stagger: 0.05,
    delay: 2.5,
    duration: .1
})

