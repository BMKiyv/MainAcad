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

let sharing = document.querySelectorAll('.share');
for (share of sharing) {
    share.addEventListener('click', function(event) {
        if (share == event.target) {
            function shareOverrideOGMeta(overrideLink, overrideTitle, overrideDescription,
                overrideImage) {
                FB.ui({
                        method: 'share_open_graph',
                        action_type: 'og.likes',
                        action_properties: JSON.stringify({
                            object: {
                                'og:url': overrideLink,
                                'og:title': overrideTitle,
                                'og:description': overrideDescription,
                                'og:image': overrideImage
                            }
                        })
                    },
                    function(response) {
                        if (response && !response.error_message) {
                            showResp(var1)
                            setTimeout(function changeLoc() {
                                let url = 'http://www.firsttest.ho.ua/project1/index.html'
                                x = window.location.replace(url)
                                return x
                            }, 3000);

                        } else {
                            showResp(var2)
                            setTimeout(function() { answer.style.display = 'none' }, 3000)
                        }

                    });
            }

        }
        break
    })
}

function metaTag() {
    let cont = document.querySelector('meta[property="og:description"]'),
        prof = document.getElementsByName('fbshare'),
        newName = '';
    contenT = cont.content
    for (let i = visibleR; i < prof.length; i++) {
        newName = prof[i].innerHTML
        break
    }
    contenT = `я узнаю, что мне больше подойдет профессия ${newName}`
    cont.setAttribute('content', contenT)
        //console.log(contenT)
    return contenT

}



let sharing = document.querySelectorAll('.share'),
    body = document.getElementsByClassName('b1'),
    contr = document.querySelectorAll('.contR'),
    var1 = 'Благодарим Вас за внимание, всегда рады видеть Вас снова!',
    var2 = 'Ой, что-то пошло не так, или не туда',
    answer = document.createElement('div')
respAns = '';

function showResp(x) {
    for (let i = visibleR; i < contr.length; i++) {
        if (contr[i].style.display == 'block') {
            console.log(contr[i])
            respAns = contr[i]
        }

    }

    answer.innerHTML = x
    answer.classList.add('answer')
    respAns.append(answer)
}



body[0].addEventListener('click', function(event) {


    for (share of sharing) {
        if (share == event.target) {

            shareOverrideOGMeta("http://firsttest.ho.ua/project1/testlogic1.html", "Пройдя тест в Main Academy", metaTag, "http://firsttest.ho.ua/project1/images/fbimage.jpg")

        }
    }


});