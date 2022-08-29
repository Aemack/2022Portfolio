projects = window.innerHeight;
aboutMe = window.innerHeight*2;
contactMe = window.innerHeight*3;

$(".post-note").click(function (elem) {
    event.preventDefault()
    smoothScroll($(this).text());
    
});

function smoothScroll(elem) {

    if (elem.includes("Home")) {

        console.log("Homes");

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    else if (elem.includes("Projects")) {

        console.log("Projects");

        window.scrollTo({
            top: projects,
            behavior: 'smooth'
        });
    }
    else if (elem.includes("About Me")) {

        console.log("About");

        window.scrollTo({
            top: aboutMe,
            behavior: 'smooth'
        });
    }
    else if (elem.includes("Contact Me")) {

        console.log("Contact Me");

        window.scrollTo({
            top: contactMe,
            behavior: 'smooth'
        });
    }
}



$('.card').click(function () {
    event.preventDefault()
    $(this).toggleClass('flipped');
});
