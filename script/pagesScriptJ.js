window.fbAsyncInit = function() {
    FB.init({
        appId: '934445156889828',
        autoLogAppEvents: true,
        xfbml: true,
        status: true,
        cookies: true,
        version: 'v4.0'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

let burger = "",
    temp = "",
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
        _ul = _tel.firstElementChild,
        _lab = _tel.lastElementChild;
    _box2.setAttribute('class', 'cloneBox2')
    _box3.setAttribute('class', 'cloneBox3')
    _rus = _box2.firstElementChild,
        _ukr = _box2.lastElementChild,
        _showtel = _lab.firstElementChild;
    _rus.classList.remove('rusfont')
    _rus.classList.add('languige'),


        burger.addEventListener("click", toggleBurger)
});

function telephones(x, y) {
    x.addEventListener('click', function() {

        if (count == 0) {
            y.style.right = '148px'
            count++
        } else if (count == 1) {
            y.style.right = '-300px'
            count--

        }

    })
};

function showTelephones() {
    _ul.addEventListener('click', function(event) {
        let x = event.target,
            y = _showtel.innerHTML;
        _showtel.innerHTML = x.innerHTML
        x.innerHTML = y
        temp = _showtel.innerHTML
    })

};

function showLang() {
    _box2.addEventListener('click', function() {
        if (_rus.classList.contains('languige')) {
            _rus.classList.remove('languige')
            _ukr.classList.add('languige')

        } else {
            _rus.classList.add('languige')
            _ukr.classList.remove('languige')

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
            telephones(_lab, _ul);
            showTelephones();
            showLang();

        } else {
            burger.classList += " active"
            medianav.classList.add("active")
            item.classList.add("active")
            _box2.classList.add('cloneBox2')
            _box3.classList.add('cloneBox3')
            medianav.append(_box2);
            medianav.append(_box3);
            telephones(_lab, _ul);
            showTelephones();
            showLang();


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

let sharing = document.querySelector('.share'),
    body = document.getElementsByClassName('b1'),
    contr = document.querySelector('.form'),
    var1 = 'Благодарим Вас за внимание, всегда рады видеть Вас снова!',
    var2 = 'Ой, что-то пошло не так, или не туда',
    answer = document.createElement('div');
answer.classList.add('answer')


function showResp(x) {
    answer.innerHTML = x
    contr.prepend(answer)
};



body[0].addEventListener('click', function(event) {
    console.log(sharing)

    if (sharing == event.target) {


        FB.ui({
                method: 'share',

                href: 'http://firsttest.ho.ua/JavaDev.html',
            },
            function(response) {
                if (response && !response.error_message) {
                    showResp(var1)
                    setTimeout(function changeLoc() {
                        let url = 'http://www.firsttest.ho.ua/index.html'
                        x = window.location.replace(url)
                        return x
                    }, 3000);

                } else {
                    showResp(var2)
                    setTimeout(function() { answer.style.display = 'none' }, 3000)
                }
            });
    }
});