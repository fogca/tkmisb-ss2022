// Top Project Image animation

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
          start: 'top bottom',
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

