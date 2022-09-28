var tl = gsap.timeline();
tl.from(".navbar h1", {
  y: 15,
  opacity: 0,
  ease: Expo.easeInOut,
  duration: 1.3,
});
tl.from(".navbar li", {
  y: 15,
  opacity: 0,
  ease: Expo.easeInOut,
  duration: 1.3,
});
tl.from("#hero-home h1", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: Expo.easeInOut,
});
tl.from("#Learn", {
  y: 15,
  opacity: 0,
  ease: Expo.easeInOut,
  duration: 1.3,
});
gsap.from("#section-2-inner", {
  scrollTrigger: {
    trigger: "#section-2-inner",
    start: "top 98%",
    end: "top 50%",
    // markers: true,
    scrub: 1,
    // markers:true
  },
  y: 60,
  opacity: 0,
  ease: Power4,
  duration: 1.3,
  rotateX: 90,
});

tl.from("#box", {
  scrollTrigger: {
    trigger: "#box",
    start: "top 90%",
    scrub: 1,
  },
  x: -60,
  opacity: 0,
  ease: Power4,
  duration: 1,
});
// tl.from("#hero-home", {
//   x:160,
// // opacity:0,
// ease:Expo.easeInOut,
// duration:1,
// });
