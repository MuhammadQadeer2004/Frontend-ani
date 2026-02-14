const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function pageAnimation() {
    var elems = document.querySelector('#elem-container');
    var fixed = document.querySelector('#fixed-img');

    elems.addEventListener('mouseenter', function () {
        fixed.style.display = 'block';
    });
    elems.addEventListener('mouseleave', function () {
        fixed.style.display = 'none';
    });


    var elemA = document.querySelectorAll('.elem');
    elemA.forEach(function (e) {
        e.addEventListener('mouseenter', function () {
            var imgage = e.getAttribute('data-image')
            fixed.style.backgroundImage = `url(${imgage})`
        })
    });
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function menuAnimation() {
var menu = document.querySelector('nav h3');
var fullScr = document.querySelector('#full-scr');
var closeBtn = document.querySelector('nav img');
var flag = 0;
menu.addEventListener('click', function () {
    if (flag == 0) {
        fullScr.style.top = 0
        closeBtn.style.opacity = 0
        flag = 1;
    }else {
    fullScr.style.top = '-100%';
    closeBtn.style.opacity = 1;
    flag = 0;
    }
})
}

function loaderAnimation() {
var load = document.querySelector('#loader');
setTimeout(function () {
    load.style.top = '-100%'
}, 4000)
}

swiperAnimation()
pageAnimation()
menuAnimation()
loaderAnimation()
