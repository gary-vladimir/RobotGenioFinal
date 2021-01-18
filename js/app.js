// Code for making nav bar responsive
function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

// add an event listener listening for scroll
navHighlighted();
window.addEventListener('scroll', navHighlighted);

function navHighlighted() {
    // get current scroll position
    let scrollY = window.pageYOffset;

    let home = document.getElementById('home').clientHeight;
    let us = document.getElementById('us').clientHeight;
    let courses = document.getElementById('courses').clientHeight;
    let awards = document.getElementById('awards').clientHeight;
    let contact = document.getElementById('contact').clientHeight;

    let homeNav = document.getElementById('homeNav');
    let usNav = document.getElementById('usNav');
    let coursesNav = document.getElementById('coursesNav');
    let awardsNav = document.getElementById('awardsNav');
    let contactNav = document.getElementById('contactNav');

    if (scrollY <= home) {
        homeNav.classList.add('active');
        usNav.classList.remove('active');
        coursesNav.classList.remove('active');
        awardsNav.classList.remove('active');
        contactNav.classList.remove('active');
    }
    if (scrollY <= us + home && scrollY > home) {
        homeNav.classList.remove('active');
        usNav.classList.add('active');
        coursesNav.classList.remove('active');
        awardsNav.classList.remove('active');
        contactNav.classList.remove('active');
    }
    if (scrollY <= courses + us + home && scrollY > home + us) {
        homeNav.classList.remove('active');
        usNav.classList.remove('active');
        coursesNav.classList.add('active');
        awardsNav.classList.remove('active');
        contactNav.classList.remove('active');
    }
    if (
        scrollY <= awards + courses + us + home &&
        scrollY > home + us + courses
    ) {
        homeNav.classList.remove('active');
        usNav.classList.remove('active');
        coursesNav.classList.remove('active');
        awardsNav.classList.add('active');
        contactNav.classList.remove('active');
    }
    if (
        scrollY <= contact + awards + courses + us + home &&
        scrollY > awards + home + us + courses
    ) {
        homeNav.classList.remove('active');
        usNav.classList.remove('active');
        coursesNav.classList.remove('active');
        awardsNav.classList.remove('active');
        contactNav.classList.add('active');
    }
}

//Automatic Slideshow
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName('mySlides');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = 'block';
    setTimeout(carousel, 3000); // Change image every 2 seconds
}
