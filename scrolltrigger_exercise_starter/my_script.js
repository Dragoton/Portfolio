"use strict";
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger: "#the_div";

gsap.to("#the_div", {
  duration: 3,
  x: "45vw",
  scrollTrigger: {
    start: "top 75%",
    end: "bottom 25%",
    trigger: "#the_div",
    scrub: 0.3,
    markers: true,
    pin: true,
  },
});
