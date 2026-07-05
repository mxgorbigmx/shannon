async function initEnvelope() {
    const response = await fetch("assets/svg/production/envelope.svg");
    const svg = await response.text();
    document.querySelector(".envelope-container").innerHTML = svg;
    initEnvelopeAnimation();
}

function initEnvelopeAnimation() {
    const flap = document.querySelector("#flap");
    const letter = document.querySelector("#letter");
    const monogram = document.querySelector("#monogram");

    //comprobacion
    console.log(flap);
    console.log(letter);
    console.log(monogram);

    gsap.set("#letter", {
        y: 0
    });
    gsap.set("#flap", {
        transformOrigin: "50% 0%"
    });
    gsap.to("#light", {
        opacity: 0.4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    const seal = document.querySelector("#seal");
    const sonido = new Audio('/assets/music/stamp.mp3');
    //seal.addEventListener("click", );
 
    let opened = false;
    
    seal.addEventListener("click", () => {
        if (opened) return;
            opened = true;
            sonido.currentTime = 0;
            sonido.play();
        
        openEnvelope();
    });
}

function openEnvelope() {

    const tl = gsap.timeline();
    tl.to("#monogram", {
        scale: 0.95,
        duration: 0.15
    })
    .to("#monogram", {
        scale: 1,
        duration: 0.15
    })
    .to("#layer1", {
        /*y: -50,
        duration: 1,
        ease: "power2.inOut" */
        rotation: -180,
        svgOrigin: "180 60",
        duration: 2.2,
        ease: "power2.inOut"
    })
    .to("#letter", {
        y: -150,
        duration: 1.2,
        ease: "power4.out"
    }, "-=0.8");
}