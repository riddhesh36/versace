gsap.to('#videoplr',{
    scrollTrigger: {
        trigger:"#main",
        start:"top top",
        scrub:2,
        pin:"#main"
    },
    width:"100%",
    ease:"Expo.easeInOut"
});

gsap.to('#one' ,{
    scrollTrigger: {
        trigger:"#main",
        start:"top top",
        scrub:3,
    },
    left: "-600px",
    opacity: "0",
    ease:"Expo.easeInOut"
});

gsap.to('#holdr-one',{
    scrollTrigger: {
        trigger:"#main",
        start:"top top",
        scrub:3,
    },
    left: "-300px",
    opacity:"0",
    ease:"Expo.easeInOut"
});

gsap.to('#sx' ,{
    scrollTrigger: {
        trigger:"#main",
        start:"top top",
        scrub:3,
    },
    right: "-600px",
    opacity: "0",
    ease:"Expo.easeInOut"
});

gsap.to('#holdr-two',{
    scrollTrigger: {
        trigger:"#main",
        start:"top top",
        scrub:3,
    },
    right: "-300px",
    opacity:"0",
    ease:"Expo.easeInOut"
});
