
if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {

    //SP Animation
    const tl = gsap.timeline()
    tl.set("body", { backgroundColor: "#FFFFFF" });
    //tl.set("#index-top .circle-1", { marginRight: "-21.25vw"});
    //tl.set("#index-top .circle-2", { marginLeft: "-21.25vw" });

    tl.from("body", {
        backgroundColor: "#FFFFFF",
        ease: "power3.inOut",
        duration: 3,}, "op+=1");

    tl.from(".bg", {
      //width: "105%",
      opacity: 0,
      ease: "power1.inOut",
      duration: 5,}, "op");

    tl.from("#top-Line span", {
      //width: "105%",
      opacity: 0,
      y: 5,
      stagger: .035,
      ease: "power4.inOut",
      duration: 3,}, "op+=1");

    tl.from("#index-top h2", {
      //width: "105%",
      opacity: 0,
      y: 3,
      ease: "power4.inOut",
      duration: 3,}, "op+=3");

    tl.from("#index-top .wrapper .orange", {
      opacity: 0,
      x: 5,
      ease: "power4.inOut",
      duration: 3,}, "op+=3");

    tl.from("#index-top .wrapper a", {
      opacity: 0,
      x: 5,
      ease: "power4.inOut",
      duration: 2.5,}, "op");

    tl.from("#Header hr", {
      opacity: .25,
      width: 50,
      stagger: .25,
      ease: "power4.inOut",
      duration: 2.5,}, "op+=.5");

    tl.from("#index-top .circle-1", {
      marginRight: "-21.25vw",
      ease: "power4.inOut",
      duration: 2.5,}, "op+=2");

    tl.from("#index-top .circle-2", {
      marginLeft: "-21.25vw",
      ease: "power4.inOut",
      duration: 2.5,}, "op+=2");
      
      
    
  } else {

    const tl = gsap.timeline()
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

}











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