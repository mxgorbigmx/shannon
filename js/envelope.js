async function initEnvelope(){
    const response = await fetch("assets/svg/production/envelope.svg");
    const svg = await response.text();
    document
        .querySelector(".envelope-container")
        .innerHTML = svg;
    initEnvelopeAnimation();
}

function initEnvelopeAnimation(){
    gsap.set("#letter",{
        y:0
    });
}

function initEnvelope(){
    gsap.set("#hero",{
        opacity:0
    });
    const seal=document.querySelector(".seal");
    const flap=document.querySelector(".flap");
    const letter=document.querySelector(".letter");
    seal.addEventListener("click",()=>{
        const tl=gsap.timeline();
        tl.to(".seal",{
            scale:.85,
            duration:.15
        })
        .to(".seal",{
            scale:1,
            duration:.15
        })
        .to(".flap",{
            rotateX:-180,
            duration:1.2,
            ease:"power2.inOut"
        })
        .to(".letter",{
            y:-150,
            duration:1.2,
            ease:"power4.out"
        },"-=0.8")
        .to("#hero",{
            opacity:1,
            duration:1.5
        },"-=0.5");
    });
}

gsap.to("#flap", {
    rotationX: -180,
    transformOrigin: "50% 0%",
    duration: 1.2,
    ease: "power2.inOut"
});