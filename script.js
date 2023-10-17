const closeMenuBtn = document.querySelector('.closeMenu__btn')
const openMenuBtn = document.querySelector('.openMenu__btn')

const nav = document.querySelector('nav')

const navLinks = document.querySelectorAll('.nav__link')



const toggleMenu = () => {
    nav.classList.toggle('toggleMenu')
}


openMenuBtn.addEventListener('click', toggleMenu)
closeMenuBtn.addEventListener('click', toggleMenu)
for(const navLink of navLinks){
    navLink.addEventListener('click', toggleMenu)
}