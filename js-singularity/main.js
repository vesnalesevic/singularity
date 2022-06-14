// change navbar styles on scroll

var navbar = document.querySelector('nav')

window.onscroll = function () {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}

var hs = document.querySelectorAll("h3");
for (i = 0; i < hs.length; ++i) {
    hs[i].innerHTML = hs[i].innerHTML.replace(/&nbsp;/g, " ");
}