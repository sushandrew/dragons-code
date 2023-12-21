const clientsSwiper = new Swiper('.clients__swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 80,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },    
})


const hamburgerBtns = document.querySelectorAll('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');
hamburgerBtns.forEach(function(item) {
  item.addEventListener('click', function() {
    menuMobile.classList.toggle('menu-mobile--active');
  })
})