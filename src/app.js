 gsap.from("header h1", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".model-card", {
      scrollTrigger: ".models-grid",
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out"
    });
