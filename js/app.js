document.addEventListener("DOMContentLoaded",()=>{
    console.log("Proyecto Aurora iniciado ✨");
});

const seal=document.querySelector(".seal");
const flap=document.querySelector(".envelope-flap");
const flap = document.querySelector(".flap");
const letter=document.querySelector(".letter");

seal.addEventListener("click", () => {

    const tl = gsap.timeline();
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
    },"-=0.8");
});