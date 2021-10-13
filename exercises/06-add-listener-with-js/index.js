window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
const button= document.getElementById("theGreen");

button.addEventListener("click",alerta);

function alerta(){
	alert("wuju");
}