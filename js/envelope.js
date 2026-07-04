async function initEnvelope(){

    const response = await fetch("assets/svg/production/envelope.svg");

    const svg = await response.text();

    document.querySelector(".envelope-container").innerHTML = svg;

    console.log("SVG cargado");

    console.log(document.querySelector("#flap"));
    console.log(document.querySelector("#letter"));
    console.log(document.querySelector("#seal"));

}