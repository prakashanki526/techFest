/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints:{
        1200:{
            slidesPreview: 2,
            spaceBetween: -56
        }
    }
  });


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-name'),
  contactMessage = document.getElementById('contact-message'),
  errorMessage = document.getElementById('error-message')

const sendEmail = (e) =>{
    e.preventDefault()

    if(contactName.value == '' || contactEmail.value == '' || contactMessage.value ==''){
        errorMessage.classList.remove('color-blue')
        errorMessage.classList.add('color-red')

        errorMessage.textContent = 'Fill all the input fields'
    }else{
        emailjs.sendForm('service_vjdt2bf','template_j46m8ih','#contact-form','_-JmtphLHdN5dMeBm')
            .then(()=>{
                errorMessage.classList.add('color-blue')
                errorMessage.textContent = 'Message sent'

                setTimeout(()=>{
                    errorMessage.textContent= ''
                },5000)
            },(error)=>{
                alert('OOPS! Something went wrong...', error)
            })

            contactEmail.value = ''
            contactName.value = ''
            contactMessage.value = ''
    }
}
contactForm.addEventListener('submit',sendEmail)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.home__data, .projects__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification__content`, {interval: 100})



// open photoGallery

document.getElementById("republicDay").onclick = function(){
    location.href = "photoGallery/republicDay.html";
}

document.getElementById("madhuram").onclick = function(){
    location.href = "photoGallery/madhuram.html";
}

document.getElementById("award").onclick = function(){
    location.href = "photoGallery/award.html";
}

document.getElementById("sports").onclick = function(){
    location.href = "photoGallery/sports.html";
}

document.getElementById("techFest").onclick = function(){
    location.href = "photoGallery/techFest.html";
}

// open department

document.getElementById("computer").onclick = function(){
    location.href = "departments/computer.html"
}

document.getElementById("chemical").onclick = function(){
    location.href = "departments/chemical.html"
}

document.getElementById("chemistry").onclick = function(){
    location.href = "departments/chemistry.html"
}

document.getElementById("civil").onclick = function(){
    location.href = "departments/civil.html"
}

document.getElementById("electrical").onclick = function(){
    location.href = "departments/electrical.html"
}

document.getElementById("electronics").onclick = function(){
    location.href = "departments/electronics.html"
}

document.getElementById("food").onclick = function(){
    location.href = "departments/food.html"
}

document.getElementById("maths").onclick = function(){
    location.href = "departments/maths.html"
}

document.getElementById("mechanical").onclick = function(){
    location.href = "departments/mechanical.html"
}

document.getElementById("physics").onclick = function(){
    location.href = "departments/physics.html"
}

// department slider 
