const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
})

let navbar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
}

new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});