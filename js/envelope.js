async function initEnvelope() {
    try {
        const response = await fetch("assets/svg/production/envelope.svg");
        console.log("Status:", response.status);
        const svg = await response.text();
        document.querySelector(".envelope-container").innerHTML = svg;
        console.log("SVG cargado");
        console.log("monogram:", document.querySelector("#monogram"));
        console.log("flap:", document.querySelector("#flap"));
        console.log("letter:", document.querySelector("#letter"));
    } catch (e) {
        console.error(e);
    }
}
