$(document).ready(function() {
    $('.slicky').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        zindex: 1,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
let list = document.querySelectorAll('.ul.city')
let city = document.querySelectorAll('#inp');
for (let elem of list)
    elem.addEventListener('click', function(event) {
        if (event.elem.mouseout) {
            elem.style.top = '-975%'
            console.log(event.elem.mouseout)
        }
    });
let burger = "",
    medianav = document.querySelector('.navbar'),
    sect = document.querySelector('.central');
document.addEventListener("DOMContentLoaded", function() {
    burger = document.getElementById('burger')
    burger.addEventListener("click", toggleBurger)
});

function toggleBurger() {
    if (burger.classList.contains("active")) {
        burger.classList.remove("active")
        medianav.classList.remove("active")
        sect.classList.remove("active");
        console.log(medianav.classList);
    } else {
        burger.classList += " active"
        medianav.classList.add("active")
        sect.classList.add("active")
    }
}