const tl = gsap.timeline()
    tl.set("body", { opacity: 0});
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
      opacity: 0,
      y: 5,
      stagger: .05,
      filter: "blur(3px)",
      ease: "power2.inOut",
      duration: 2.5,}, "op");

    tl.from("#index-top h2", {
      opacity: 0,
      y: 7,
      filter: "blur(5px)",
      ease: "power2.inOut",
      duration: 2.5,}, "op+=.65");

    tl.from("#index-projects .container .img-box img", {
      scale: 1.25,
      ease: "Power1.Out",
      duration: 2.5,}, "op+=1");

    tl.from("#index-projects .container .box *", {
      opacity: 0,
      x: 5,
      stagger: .25,
      ease: "Power1.easeOut",
      duration: 2.5,}, "op+=1.5");

  if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {

    tl.from("#index-projects .img-box", {
      autoAlpha: 0,
      width: 50,
      ease: "power2.in",
      duration: 2,}, "op+=1");
    
  } else {

    tl.from("#index-projects .img-box", {
      autoAlpha: 0,
      ease: "power2.in",
      duration: 2,}, "op+=1");

    tl.from("header ul li", {
      autoAlpha: 0,
      y: 5,
      filter: "blur(5px)",
      stagger: .2,
      ease: "power2.inOut",
      duration: 2,}, "op+=1");
  }








/*
let url = location.href;
if (url == "https://tkmisb-ss2022.pages.dev/") {
let body = document.querySelector('body');
gsap.registerPlugin(ScrollTrigger);
let tlAn = gsap.timeline({
  scrollTrigger: {
    trigger: "#index-about",
    //markers: true,
    start: 'top center-=5%',
    toggleActions: "restart none none reverse"
  }
});

//tlAn.set("#index-about", { background: "white" });
tlAn.to("body, header", {
  backgroundColor: "black",
  ease: "Power2.inOut",
  duration: 1.5,},"about");

tlAn.to("*",{
  color: "white",
  ease: "Power2.inOut",
  duration: 1.5,},"about");


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




/*


/*
      document.getElementById('circle-color').addEventListener('click', () => {
        const currentPos = window.pageYOffset && document.documentElement.scrollTop 
        if (currentPos > 300) {
          document.documentElement.style.setProperty('--backgroundColor', '#090909');
          document.documentElement.style.setProperty('--textColor', '#e3e3e3');
        } else {
          document.documentElement.style.setProperty('--backgroundColor', '#e3e3e3');
          document.documentElement.style.setProperty('--textColor', '#090909');
        }
        //startPos = currentPos
      })
      */

      /*
      window.addEventListener('scroll', () => {
        const currentPos = window.pageYOffset && document.documentElement.scrollTop 
        if (currentPos > 300) {
          document.documentElement.style.setProperty('--backgroundColor', '#090909');
          document.documentElement.style.setProperty('--textColor', '#e3e3e3');
        } else {
          document.documentElement.style.setProperty('--backgroundColor', '#e3e3e3');
          document.documentElement.style.setProperty('--textColor', '#090909');
        }
        //startPos = currentPos
      })
      */
      
      /*
      gsap.registerPlugin(ScrollTrigger);
      this.Animation();

      //Store the certain local position and bring it back here when the page back
      (() => {
      let entries = performance.getEntriesByType("navigation");
      entries.forEach((entry) => {
        if (entry.type == "back_forward" && sessionStorage.getItem("scrollY") != null) {
          window.scrollTo(0, sessionStorage.getItem("scrollY"));
        }
      });
      })();
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("scrollY", window.scrollY);
      });
      */
      
