
//if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {

    //SP Animation
    const tl = gsap.timeline()
    //tl.set("main", { autoAlpha: 0 });
    tl.set(".bg", { opacity: 0 });
    //tl.set("body", { opacity: 0, backgroundColor: "#FFFFFF" });
    tl.set("hr", { width: 0 });
    tl.set(".Logo path", { opacity: 0, color: "black" });
    
    
    tl.from("body", {
      opacity: 0,
      duration: .5,
    }, "op");

    tl.from(".Logo path", {
      opacity: 0,
      y: 5,
      stagger: .05,
      ease: "power4.inOut",
      duration: 2}, "op+=1");

    tl.from(".circle", {
      opacity: 0,
      x: 5,
      stagger: .1,
      ease: "power4.inOut",
      duration: 2.5}, "op+=1");

    tl.from("#top-Line span", {
      //width: "105%",
      opacity: 0,
      y: 5,
      stagger: .08,
      filter: "blur(3px)",
      ease: "power2.inOut",
      duration: 2.5,}, "op");

    tl.from("#index-top h2", {
      opacity: 0,
      y: 7,
      filter: "blur(5px)",
      ease: "power2.inOut",
      duration: 2.5,}, "op+=.1");

    tl.from("#index-projects .img-box", {
      autoAlpha: 0,
      width: 50,
      ease: "power2.in",
      duration: 2.5,}, "op+=1");

    tl.from("#index-projects .container .img-box img", {
      scale: 1.25,
      ease: "Power1.easeOut",
      duration: 2.5,}, "op+=1.25");

    tl.from("#index-projects .container .box *", {
      opacity: 0,
      x: 5,
      stagger: .5,
      ease: "Power1.easeOut",
      duration: 2.5,}, "op+=1.5");

      
    
  //} else {

    //const tl = gsap.timeline()
    //tl.set("#top-Visual", { width: "100vw" });
    /*
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
    */

//}











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