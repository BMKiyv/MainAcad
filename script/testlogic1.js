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

let a = 0,
    result = 0,
    visiblity = 0,
    visiblityR = 0,
    visible,
    b,
    start = document.querySelectorAll('.s'),
    startRes = document.querySelectorAll('.s1'),
    cont = document.getElementsByClassName('cont'),
    myForms = document.getElementsByTagName('form'),
    warn = document.querySelector('.warning'),
    contR = document.querySelectorAll('.contR');

function watch() {
    b = false

    for (let i = visiblity; i < cont.length; i++) {
        cont[i].style.display = 'block'
            //cont[i].classList.add('act')
        visible = cont[i]
        visiblity = +i
        for (let j = visiblity; j < cont.length; j++) {
            if (j !== i) {
                cont[j].style = "display:none"
            }
        }
        break;
    }
};
watch();

function watchR() {
    if (result > 0 && result < 5) {
        visiblityR = 0;
    } else if (result > 4 && result < 9) {
        visiblityR = 1;
    } else if (result > 8 && result < 13) {
        visiblityR = 2;
    } else {
        visiblityR = 3;
    };

    for (let i = visiblityR; i < contR.length; i++) {
        if (i == visiblityR) {
            contR[i].style.display = 'block';
            visibleR = contR[i];
            for (let j = visiblityR; j < contR.length; j++) {
                if (j !== i) {
                    contR[j].style = "display:none"
                }
            }
        }
        break;

    }
};

function atention() {
    console.log(visiblity)
    for (let i = 0; i < myForms.length; i++) {
        if (i == visiblity) {
            let sms = document.createElement('div')
            sms.innerHTML = 'Чтобы перейти к следующему вопросу, нужно ответить на этот.'
            sms.className = 'warning'
            sms.style.display = 'block'
            myForms[i].append(sms)
            console.log(sms);
            setTimeout(() => {
                sms.style.display = 'none'
            }, 3000)
        }
    }
}

for (let i = visiblity; i < start.length; i++) {

    start[i].addEventListener('click', function() {
        console.log(b)

        if (start[i] !== start[start.length - 1]) {
            if (b == false) {
                visiblity = visiblity;
                watch(atention());
            } else if (b == true) {
                visiblity++;
                result += a;
                // visible.classList.add('active');
                visible.style.display = 'none'
                watch();
            }

        } else if (start[i] == start[start.length - 1]) {
            if (b == false) {
                visiblity = visiblity;
                watch(atention());
            } else if (b == true) {
                result += a;
                visible.style.display = 'none'
                watchR();
            }
        }

    });

};

for (i = 0; i < myForms.length; i++) {
    let item = myForms[i];
    item.addEventListener('change', function(event) {
        let target = event.target.closest('input');
        if (target.checked == true) {
            a = +target.value;
            b = true
        }


    });
}

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



let sharing = document.querySelectorAll('.share'),
    body = document.getElementsByClassName('b1');

body[0].addEventListener('click', function(event) {
    for (share of sharing) {
        if (share == event.target) {
            FB.ui({
                    method: 'share',

                    href: 'http://firsttest.ho.ua/project1/testlogic1.html',
                },
                // callback
                function(response) {
                    if (response && !response.error_message) {
                        // then get post content
                        alert('successfully posted. Status id : ' + response.post_id);
                    } else {
                        alert('Something went error.');
                    }
                })
        }
    }

});