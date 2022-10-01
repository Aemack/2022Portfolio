//const { NONAME } = require("dns");

window.addEventListener('resize', CheckForScreenSize);


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})



function CheckForScreenSize() {
    if (window.innerWidth > 1200) {
        console.log("Do thing")
        //window.location.replace("D:/Projects/2022Portfolio/2022Portfolio/index.html");
        window.location.replace("http://devmc.co.uk/");
    }
}