async function initEnvelope() {
    const response = await fetch("assets/svg/production/envelope.svg");
    const svg = await response.text();
    document.querySelector(".envelope-container").innerHTML = svg;
    initEnvelopeAnimation();
}

function initEnvelopeAnimation() {
    gsap.set("#letter", {
        y: 0
    });
    gsap.set("#flap", {
        transformOrigin: "50% 0%"
    });
}
