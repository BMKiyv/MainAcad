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

for (let i = visiblity; i < start.length; i++) {

    start[i].addEventListener('click', function() {
        console.log(b)

        if (start[i] !== start[start.length - 1]) {
            if (b == false) {
                visiblity = visiblity;
                watch(warn.style.display = 'block',
                    setTimeout(() => {
                        warn.style.display = 'none'
                    }, 3000));
            } else if (b == true) {
                visiblity++;
                result += a;
                visible.style.display = 'none';
                watch();
            }

        } else if (start[i] == start[start.length - 1]) {
            if (b == false) {
                visiblity = visiblity;
                watch(warn.style.display = 'block',
                    setTimeout(() => {
                        warn.style.display = 'none'
                    }, 3000));
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
    medianav = document.querySelector('.navbar'),
    sect = document.getElementsByClassName('central');
document.addEventListener("DOMContentLoaded", function() {
    burger = document.getElementById('burger')
    burger.addEventListener("click", toggleBurger)
});

function toggleBurger() {
    for (item of sect) {
        if (burger.classList.contains("active")) {
            burger.classList.remove("active")
            medianav.classList.remove("active")
            item.classList.remove("active");
            //console.log(medianav.classList);
        } else {
            burger.classList += " active"
            medianav.classList.add("active")
            item.classList.add("active")
        }
        break
    }
}
let cityName = document.querySelectorAll('.cities'),
    cityShow = document.querySelector('.geo'),
    cityBlock = document.querySelector('.city'),
    cityArea = document.querySelector('.hidlabel1'),
    templ = '';

cityBlock.addEventListener('click', function(event) {
    let x = event.target,
        y = cityArea.innerHTML;
    cityArea.innerHTML = x.innerHTML
    x.innerHTML = y
    templ = y
    templ = cityArea.innerHTML
        // console.log(templ)
});




let sharing = document.querySelectorAll('.share'),
    body = document.getElementsByClassName('b1');

body[0].addEventListener('click', function(event) {
    for (share of sharing) {
        if (share == event.target) {
            FB.ui({
                    method: 'share_open_graph',
                    action_type: 'og.shares',
                    action_properties: JSON.stringify({
                        object: {
                            'og:url': 'http://firsttest.ho.ua/project1/testlogic1.html',
                            'og:title': 'Я прошел сложнейший тест в Main Academy,',
                            'og:description': '...и мне просто не терпится поделиться об этом невероятном событии со всеми моими друзьями!!!:',
                            'og:image': 'http://firsttest.ho.ua/project1/images/back23.jpg'
                        }
                    })
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