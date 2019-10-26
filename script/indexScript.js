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

let burger = '',
    medianav = document.querySelector('.navbar'),
    sect = document.querySelector('.central');
document.addEventListener('DOMContentLoaded', function() {
    burger = document.getElementById('burger')
    burger.addEventListener('click', toggleBurger)
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

let cityShow = document.querySelector('.geo'),
    cityBlock = document.querySelector('.city'),
    cityArea = document.querySelector('.hidlabel1'),
    templ = '';

cityBlock.addEventListener('click', function(event) {
    let x = event.target,
        y = cityArea.innerHTML;
    cityArea.innerHTML = x.innerHTML
    x.innerHTML = y
    templ = cityArea.innerHTML
        // console.log(templ)
    if (cityArea.innerHTML !== 'Киев') {
        cityShow.classList.add('expand')
    } else cityShow.classList.remove('expand')
});

let telShow = document.querySelector('.tel'),
    telBlock = document.querySelector('.telin'),
    telArea = document.querySelector('.hidlabel2'),
    temptel = '';

telBlock.addEventListener('click', function(event) {
    let x = event.target,
        y = telArea.innerHTML;
    telArea.innerHTML = x.innerHTML
    x.innerHTML = y
    temptel = telArea.innerHTML
});
let lang = document.querySelector('.box2'),
    rus = lang.firstElementChild,
    ukr = lang.lastElementChild;
rus.classList.add('rusfont');

lang.addEventListener('click', function() {
    if (rus.classList.contains('rusfont')) {
        rus.classList.remove('rusfont')
        ukr.classList.add('rusfont')

    } else {
        rus.classList.add('rusfont')
        ukr.classList.remove('rusfont')
    }
});