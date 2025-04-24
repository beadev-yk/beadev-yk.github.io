AOS.init();

AOS.init({
  offset: 120,
  delay: 0,
  duration: 800,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-text", {
    strings: [
      "FRONT-END DEVELOPER.",
      "BACK-END DEVELOPER.",
      "FULL STACK DEVELOPER.",
      "MENTOR.",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
  });
});
