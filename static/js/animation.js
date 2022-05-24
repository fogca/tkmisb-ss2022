/*
const tl = gsap.timeline()
    //tl.set("#top-Visual", { width: "100vw" });

    tl.from("#Index .bg", {
        autoAlpha: 0,
        ease: "power3.inOut",
        duration: 3,
    }, "+=3");
    
    tl.from("header li", {
        opacity: 0,
        y: 10,
        stagger: .25,
        ease: "power3.inOut",
        duration: 3,}, "-=10");
    




if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {

    //SP Animation
    
    const tl = gsap.timeline()
    //tl.set("#top-Visual", { width: "100vw" });

    tl.from("#Index .first-section .wrapper .sp *", {
        //width: "105%",
        autoAlpha: 0,
        stagger: .2,
        x: 3,
        ease: "power3.inOut",
        duration: 3,
    });
    
  } else {

    const tl = gsap.timeline()
    //tl.set("#top-Visual", { width: "100vw" });

    tl.from("#work-top .container", {
        //width: "105%",
        autoAlpha: 0,
        filter: "saturate(0)",
        //y: 10,
        x: -3,
        ease: "power2.inOut",
        stagger: .25,
        duration: 3,
    });

}

*/










/*

gsap.registerPlugin(ScrollTrigger);
    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          //trigger: container,
          trigger: container,
          markers: true,
          start: 'top center+=45%',
          toggleActions: "restart none none reset"
        }
      });

      tl.set(container, { autoAlpha: 0 });
      //tl.set(image, { scale:1.05 });
      tl.from(container, 1, {
        xPercent: 0,
        autoAlpha: 0,
        delay: 0,
        ease: "Power4.out"
      });
      tl.from(image, 2, {
        xPercent: 0,
        scale: 1.25,
        delay: -3.5,
        ease: "Power4.out"
      });
    });

*/