let index = 0;

const p = document.querySelectorAll(".p");
const label = document.querySelector(".tagline");
const labeltagline = document.querySelector(".tagline_description");

const content = ["IaaS"];
const contentTagLine = [
  `Impact as a Service (laaS) <br/>
   Building the business infrastructure of the future`,
];
label.innerHTML = content[index];
labeltagline.innerHTML = contentTagLine[index];

let anumateTagline = gsap.from(".tagline", {
  x: -10000,
  duration: 3,
  ease: "circ.out",
});

setInterval(() => {
  index = index < content.length - 1 ? index + 1 : 0; 
  label.innerHTML = content[index];
  labeltagline.innerHTML = contentTagLine[index];
  // anumateTagline.restart();
}, 10000);

gsap.from(".tagline_description", {
  y: 500,
  duration: 2,
  ease: "circ.out",
});

p.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      scrub: 5,
      start: "20px 90%",
      end: "center 85%",
    },
    opacity: 0.1,
    y: 25,
    color: "#333",
  });
});

gsap.from(".prompt", {
  scrollTrigger: {
    trigger: ".paragraph",
    scrub: 20,
    start: "top bottom",
    end: "20% bottom",
  },
  opacity: 0.1,
  y: "100%",
});

gsap.to(".header-icon", {
  scrollTrigger: {
    trigger: ".header-icon",
    start: "center bottom",
    scrub: 2,
  },
  opacity: 0,
});
