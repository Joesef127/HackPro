document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.mySwiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  new Swiper('.hero-swiper', {
    loop: true,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
    // effect: 'fade', 
    allowTouchMove: false,
  });
});
