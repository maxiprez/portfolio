// MENU SHOW
const showMenu = (toggleId, navId) => {
    const toogle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toogle && nav){
        toogle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

// ACTIVE AND REMOVE MENU
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//*===== SCROLL REVEAL ANIMATION =====*//
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* SCROLL HOME */
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__social-icon',{interval: 200})

/* SCROLL ABOUT */
sr.reveal('.about__img',{})
sr.reveal('.about__title',{delay: 200})
sr.reveal('.about__text',{delay: 400})

/* SCROLL SKILLS */
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})
sr.reveal('.skills__img',{delay: 400})

/* SCROLL WORK */
sr.reveal('.work__img',{interval: 200})

/* SCROLL CONTACT */
sr.reveal('.contact__input',{interval: 200})

/* typed */
const typed = new Typed('.typed', {
    // strings: ['Hi, <br>I`am <span class="home__title-color">Maximiliano</span> <br> Front End Developer.'],

    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 90, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

//*===== CAMBIO DE IDIOMA =====*//
let check = document.querySelector('.check');

check.addEventListener('click', lenguage);


function lenguage (){
    let id=check.checked;
         if(id === true){
             location.href='../es/index.html';
         }else{
             location.href='../index.html';
         }
}

// Detecta el lenguaje del navegador
let lgNav = window.navigator.language||navigator.browserLanguage;
// Extrae las dos primeros datos
let lg = lgNav.substring(0, 2);


function lenguajeDetected () {
    if(lg == 'es'){
        // detecta y abre idioma español
        window.location.href = '../es/index.html';
        }else if(lg == 'en'){
        // detecta y abre idioma inglés
        window.location.href = '../index.html';
        }else{
        // si no es ninguna abre idioma inglés
        window.location.href = '../index.html';
        }
}



