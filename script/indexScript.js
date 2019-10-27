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

let burger = "",
    count = 0,
    medianav = document.querySelector('.navbar'),
    sect = document.getElementsByClassName('central');
document.addEventListener("DOMContentLoaded", function() {
    burger = document.getElementById('burger'),
        box2 = document.querySelector('.box2'),
        box3 = document.querySelector('.box3'),
        _box2 = box2.cloneNode(true),
        _box3 = box3.cloneNode(true),
        _inp = _box3.firstElementChild,
        _tel = _box3.lastElementChild,
        _lab = _tel.firstElementChild;
    _box2.setAttribute('class', 'cloneBox2')
    _box3.setAttribute('class', 'cloneBox3')
    _rus = _box2.firstElementChild,
        _ukr = _box2.lastElementChild;
    _rus.classList.remove('rusfont')
    _rus.classList.add('languige');
    burger.addEventListener("click", toggleBurger)
});

function telephones(x, y) {
    x.addEventListener('click', function() {

        if (count == 0) {
            y.style.right = '0px'
            count++
        } else if (count == 1) {
            y.style.right = '-300px'
            count--

        }

    })
};


function toggleBurger() {


    for (item of sect) {



        if (burger.classList.contains("active")) {
            burger.classList.remove("active")
            medianav.classList.remove("active")
            item.classList.remove("active")
            _box2.classList.remove('cloneBox2')
            _box3.classList.remove('cloneBox3')
            _box2.remove()
            _box3.remove()

        } else {
            burger.classList += " active"
            medianav.classList.add("active")
            item.classList.add("active")
            _box2.classList.add('cloneBox2')
            _box3.classList.add('cloneBox3')
            medianav.append(_box2);
            medianav.append(_box3);
            telephones(_box3, _lab);

            _box2.addEventListener('click', function() {
                if (_rus.classList.contains('languige')) {
                    _rus.classList.remove('languige')
                    _ukr.classList.add('languige')

                } else {
                    _rus.classList.add('languige')
                    _ukr.classList.remove('languige')

                }
            })

        }
        break
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