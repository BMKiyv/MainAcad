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
        break
    })
}