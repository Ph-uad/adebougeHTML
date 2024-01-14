gsap.registerPlugin(ScrollTrigger) 

const paragraphs = document.querySelectorAll('.paragraph')
const medias = document.querySelectorAll('.media')

paragraphs.forEach((target)=>{
  gsap.from(target, {
    scrollTrigger:{
      trigger : target,
      start: "top 70%",   
      end: "center 85%",
      // markers : true,
      scrub : 4
    },  
    opacity: 0,
    y: 100,
  });
})

medias.forEach((target)=>{
    gsap.from(target, {
      scrollTrigger : {
        trigger : target,
        // markers: true,
        scrub : 3,
        start: "20% 60%",   
        end: "center 85%",
      },
      y: -100,
      opacity : 0,
    })
})


console.log(`paragraphs ${paragraphs}`)