projects = window.innerHeight;
aboutMe = window.innerHeight*2;
contactMe = window.innerHeight*3;

if (window.innerWidth < 1200) {
    //window.location.replace("D:/Projects/2022Portfolio/2022Portfolio/Altindex.html");
    window.location.replace("http://devmc.co.uk/AltIndex.html");
}

window.addEventListener('resize', CheckForScreenSize);

function CheckForScreenSize() {
    if (window.innerWidth < 1200) {
        //window.location.replace("D:/Projects/2022Portfolio/2022Portfolio/Altindex.html");
        window.location.replace("http://devmc.co.uk/AltIndex.html");
    }
}

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


//$('.flipped').click(function () {
//    event.preventDefault()

//    var copyText = "adam_mcgrane@msn.com"

//    /* Select the text field */
//    //copyText.select();
//    //copyText.setSelectionRange(0, 99999); /* For mobile devices */

//    /* Copy the text inside the text field */
//    navigator.clipboard.writeText(copyText);
//    alert("Hello");

//});
