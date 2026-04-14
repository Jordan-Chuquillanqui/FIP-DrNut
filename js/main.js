console.log("fired");

//variables
const button = document.querySelector("#button");
const burgerCon = document.querySelector("#burger-con");

const lightBox = document.querySelector("#lightbox");
const links = document.querySelectorAll("#products a");
const content = document.querySelector("#lightbox article");

let drinks = [
    {
        name: "Dr Nut Original",
        bio: "The original legend. Born in New Orleans with our classic almond formula. 100% natural ingredients for an intense, refreshing and crisp finish."
    },
    {
        name: "Dr Nut Sugarfree",
        bio: "All the flavor, zero sugar. We kept the iconic almond taste you love without the compromise. The full Dr Nut experience for those who want to keep it light."
    },
    {
        name: "Dr Nut Winter Edition",
        bio: "Limited edition for the winter. Our classic almond taste with a cold, sharp finish that hits different on frosty days. Stay refreshed, no matter the temperature."
    }
];

//functions
function hamburgerMenu() {
	burgerCon.classList.toggle("slide-toggle");
	button.classList.toggle("expanded");
}

function fillContent(event) {
    console.log(drinks[this.dataset.drinkIndex].name);
    console.log(drinks[this.dataset.drinkIndex].bio);

    lightBox.classList.add(`lightbox${this.dataset.drinkIndex}`);

    content.innerHTML = "";

    let drinkName = document.createElement("h3");
    drinkName.textContent = drinks[this.dataset.drinkIndex].name;
    drinkName.classList = "lb_heading";
    content.appendChild(drinkName);

    let drinkBio = document.createElement("p");
    drinkBio.textContent = drinks[this.dataset.drinkIndex].bio;
    drinkBio.classList = "lb_text";
    content.appendChild(drinkBio);
}

//Event Listeners
button.addEventListener("click", hamburgerMenu);

links.forEach(link => link.addEventListener("click", fillContent));