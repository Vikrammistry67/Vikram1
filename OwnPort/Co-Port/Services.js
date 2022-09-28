let service = document.querySelector("#service-txt");
let h1 = document.querySelector("h1");
let i1 = document.querySelector("#i1");
let i2 = document.querySelector("#i2");
let prtOne = document.querySelector("#prt-top");

h1.style.border = "none";
i1.style.display = "none";
i2.style.display = "none";
let tl = gsap.timeline();
tl.from(h1, {
  y: 30,
  duratin: 1,
  delay: 1,
  opacity: 0,
});
setTimeout(() => {
  i1.style.display = "block";
  i1.style.color = "#fff";
  tl.to(i1, {
    x: 500,
    ease: Expo.easeInOut,
    duration: 1,
  });
}, 3000);

setTimeout(() => {
  i2.style.color = "#fff";
  i2.style.display = "block";
  tl.to(i2, {
    x: -500,
    ease: Expo.easeInOut,
    duration: 1,
  });
}, 5000);
setTimeout(() => {
h1.style.borderTop = "block"
},3000);
setTimeout(() => {

});
setTimeout(() => {

});