/*const arrImages = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];


const eleSlider = document.querySelector('.slider')
const eleBtnUp = document.querySelector('.btn-left')
const eleBtnDown = document.querySelector('.btn-right')

for (let i = 0; i < arrImages.length; i++) {
    
    const eleimg = document.createElement('img');
    eleimg.src = arrImages[i].image;
    //console.log(eleimg)
    //eleimg.classList.add('slider-img');
   
    // if(i===0){
    //     eleimg.classList.add('active');
    // }
    eleSlider.append(eleimg)
    eleCardContent.innerHTML = (`${arrImages[i].image} ${arrImages[i].name} ${arrImages[i].lastName} ${arrImages[i].occupation}`);

}

const listEleImg = document.querySelectorAll('.slider-img'); 
let activeIndex = 0;

eleBtnUp.addEventListener ('click', function (){
    listEleImg[activeIndex].classList.remove('active');
    
    if (activeIndex === listEleImg.length - 1) {
		activeIndex = 0
	}else{
        activeIndex++;
    }
    listEleImg[activeIndex].classList.add('active');
	

})

eleBtnDown.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');

    if (activeIndex === 0) {
		activeIndex = listEleImg.length -1;
	}else{
        activeIndex--;
    }

	listEleImg[activeIndex].classList.add('active');

});
*/

const arrImages = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const eleSliderViewer = document.querySelector('.slider-viewer');
const eleSliderThumbs = document.querySelector('.thumbs');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');

// creare i tag immagine nell'html
for (let i = 0; i < arrImages.length; i++) {
	// creare le slide
	// creare il div .slide
	const eleSlide = document.createElement('div'); // <div></div>
	eleSlide.classList.add('slide'); // <div class="slide"></div>
	// creare elemento immagine
	const eleImg = document.createElement('img'); // <img>
	eleImg.src = 'img/' + arrImages[i].image; // <img src="img/nomeImmagine_qui">
	eleImg.alt = arrImages[i].title; // <img src="img/nomeImmagine_qui" alt="titolo_qui">
	// creare il div .text
	const eleText = document.createElement('div'); // <div></div>
	eleText.classList.add('text'); // <div class="text"></div>
	eleText.innerHTML = `
		<h2>${arrImages[i].title}</h2>
		<p>${arrImages[i].text}</p>
	`;  // <div class="text"> <h2>titolo_qui</h2> <p>text_qui</p> </div>

	eleSlide.append(eleImg); // <div class="slide"> <img src="img/nomeImmagine_qui" alt="titolo_qui"> </div>
	eleSlide.append(eleText);
	/*
	<div class="slide">
		<img src="img/nomeImmagine_qui" alt="titolo_qui">
		<div class="text">
			<h2>titolo_qui</h2>
			<p>text_qui</p>
		</div>
	</div>
	*/

	if (i === 0) {
		eleSlide.classList.add('active');
	}
	eleSliderViewer.append(eleSlide);

	// creare i tag immagine che vanno nella sezione .thumbs
	const eleThumb = document.createElement('img');
	eleThumb.src = 'img/' + arrImages[i].image;
	eleThumb.classList.add('thumb-img');
	if (i === 0) {
		eleThumb.classList.add('active');
	}
	eleSliderThumbs.append(eleThumb);
}
// document.querySelector('.slider-img').classList.add('active');

const listEleImg = document.querySelectorAll('.slide'); // non e' un array ma qualcosa di simile
const listThumbs = document.querySelectorAll('.thumb-img');

let activeIndex = 0;
document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`;

// aggiungere gli event listeners ai due bottoni
eleBtnRight.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	activeIndex++;
	if (activeIndex === listEleImg.length) {
		activeIndex = 0;
	}

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`;
});

eleBtnLeft.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`;
});