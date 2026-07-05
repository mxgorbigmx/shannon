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
    console.log(flap);
    console.log(letter);
    console.log(monogram);
}

function initEnvelopeAnimation() {
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

    const monogram = document.querySelector("#monogram");
    monogram.addEventListener("click", openEnvelope);

}