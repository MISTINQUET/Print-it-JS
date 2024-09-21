const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//variables globales
const dotContainer = document.querySelector(".dots")
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const image = document.querySelector(".banner-img")
const imageTitle = document.querySelector("#banner p")
let indexUser = 0

//methode pour afficher les dots
const displayDots = () => {
	dotContainer.innerHTML = '';//on s assure que le container de depart est vide
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement("div")
		dot.classList.add("dot")
		dotContainer.appendChild(dot)
		if (i === indexUser) {
			dot.classList.add("dot_selected")

		}
	}
}
displayDots() 

const tabDots = document.querySelectorAll(".dots .dot");

//methode pour gerer le clic sur la fleche droite
const handleRightClick = ()=>{
	if(tabDots.length > 0 ){
		tabDots[indexUser].classList.remove("dot_selected");
		indexUser++;
		if(indexUser > slides.length - 1){
			indexUser = 0;//initialise l index a 0

		}
		tabDots[indexUser].classList.add("dot_selected")	
        image.src = "./assets/images/slideshow/"+slides[indexUser].image;
		imageTitle.innerHTML = slides[indexUser].tagLine;

	}else {
		console.error("il n y a pas de dot dans le tableau")
	}

}

arrowRight.addEventListener("click",handleRightClick)
const handleLeftClick = ()=>{
	if(tabDots.length > 0 ){
		tabDots[indexUser].classList.remove("dot_selected");
		indexUser--;
		if(indexUser < 0){
			indexUser = slides.length - 1;
		}
		tabDots[indexUser].classList.add("dot_selected")
		image.src = "./assets/images/slideshow/"+slides[indexUser].image;
		imageTitle.innerHTML = slides[indexUser].tagLine;

} else {
	console.error("il n y a pas de dots dans le tableau")
}
}
arrowLeft.addEventListener("click",handleLeftClick)