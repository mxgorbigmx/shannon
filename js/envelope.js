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
