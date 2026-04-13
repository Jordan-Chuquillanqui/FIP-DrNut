console.log("fired");

//variables
const button = document.querySelector("#button");
const burgerCon = document.querySelector("#burger-con");

//functions
function hamburgerMenu() {
	burgerCon.classList.toggle("slide-toggle");
	button.classList.toggle("expanded");
}

//Event Listeners
button.addEventListener("click", hamburgerMenu);