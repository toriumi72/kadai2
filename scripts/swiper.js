const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
    allowTouchMove: true,
    centeredSlides: true,
    slidesPerView: 1.1,
    spaceBetween: 80,
    autoHeight: true,
    mousewheel: {
        forceToAxis: true,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },   
    breakpoints: {
        960: {
            slidesPerView: 1.45,
        }
    },
});