document.addEventListener("DOMContentLoaded",()=>{

    console.log("Proyecto Aurora iniciado ✨");

});

const seal=document.querySelector(".seal");

const flap=document.querySelector(".envelope-flap");

const letter=document.querySelector(".letter");

seal.addEventListener("click",()=>{

    flap.style.transform="rotateX(180deg)";

    letter.style.transform="translateY(-140px)";

});

