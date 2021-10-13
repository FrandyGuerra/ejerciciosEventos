// your function goes here

function loadListener(){
    alert("loading finished...");
}

window.onload= loadListener();
const cuerpo= document.querySelector("body");
cuerpo.addEventListener("load",loadListener);

