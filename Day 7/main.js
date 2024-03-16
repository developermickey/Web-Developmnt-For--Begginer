gsap.registerPlugin(ScrollTrigger);

gsap.from(".header", {
    duration: 1,
    y: "-100%", // Change the percentage as needed
    ease: "power2.inOut"
  });

  gsap.to(".header", {
    duration: 1,
    backgroundColor: "#1d1d1dc2",
    scrollTrigger: {
      trigger: "#page2",
      start: "top 70%",
      end: "top bottom",
    //   markers: true,
      scrub: true,
    }
  });


