window.addEventListener( "scroll", function() {
    let cookie = document.querySelector("#cookie");
    let rect = cookie.getBoundingClientRect();
    let y = rect.top + window.pageYOffset;
    if (y > 700) {
        cookie.classList.add('scrolled');
    } else {
        cookie.classList.remove('scrolled');
    }
});


/*

window.addEventListener( "scroll", function() {
    let header = document.querySelector("header");
    let rect = header.getBoundingClientRect();
    let y = rect.top + window.pageYOffset;
    if (y > 5) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

*/