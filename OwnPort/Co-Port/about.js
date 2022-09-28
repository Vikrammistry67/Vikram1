var flag = 0;
document.querySelector("#lines").addEventListener("click", function () {
  if (flag === 0) {
    function smoot() {
      gsap.from("#click-Page", {
        x: -100,
        duration: 0.9,
        ease: Expo.easeInOut,
        opacity: 0,
      });
    }
    smoot();
    // document.querySelector("#line-1").style.transformOrigin= "0 0";
    document.querySelector("#nav").style.display = "none";
    // document.querySelector("#center-txt").style.display = "none";
    document.querySelector("#center-txt").style.display = "none";
    document.querySelector("#click-Page").style.display = "block";
    flag = 1;
  } else {
    function smoot() {
      gsap.from("#click-Page", {
        y: 50,
        duration: 1,
        ease: Power4,
        opacity: 0,
      });
    }
    document.querySelector("#nav").style.display = "block";
    document.querySelector("#center-txt").style.display = "block";
    document.querySelector("#click-Page").style.display = "none";
    smoot();
    flag = 0;
  }
});
