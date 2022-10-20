
const hamburger = document.querySelector('.c-hamburger');
const navLinks = document.querySelector('.c-nav__links');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

const backToTop = document.querySelector('.back-to-top');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    }   else {
        backToTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

jQuery(document).ready(function( $ ) 
    {
      $('.counter').counterUp({
    delay: 10,
    time: 500
    });
    });




function animated() {
    let animation = document.querySelectorAll('.c-coffee-title');
    for (let i = 0; i < animation.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = animation[i].getBoundingClientRect().top;
        let elementVisible = 550;

        if (elementTop < windowsHeight - elementVisible) {
            animation[i].classList.add('active');
        } else {
                animation[i].classList.remove('active');
            }
        }
    }

    window.addEventListener("scroll", animated);

