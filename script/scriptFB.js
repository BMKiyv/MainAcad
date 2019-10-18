window.fbAsyncInit = function() {
    FB.ui({
        appId: '934445156889828',
        status: true,
        cookie: true, // enable cookies to allow the server to access
        // the session
        method: 'share',
        xfbml: true, // parse social plugins on this page
        version: 'v3.0' // use graph api version 2.8
    });

    FB.getLoginStatus(function(response) {});
    FB.AppEvents.logPageView();
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v3.0&appId=934445156889828";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));