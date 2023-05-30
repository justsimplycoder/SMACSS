// import test from './modules/test.js'

// test();

(function($) {
  // Модуль .hamburger
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  hamburger.addEventListener('click', function (event) {
    event.preventDefault();
    event.target.classList.toggle('fa-bars');
    event.target.classList.toggle('fa-times');
    nav.classList.toggle('is-show');
  });

  // Модуль .tab
  function tabHandler(tab) {
    const tabLink = tab.querySelector('.tab__links');
    const tabItem = tab.querySelectorAll('.tab__item');
    const tabContent = tab.querySelectorAll('.tab__content');
    tabLink.onclick = function (event) {
      event.preventDefault();
      let item = event.target.closest('.tab__item');
      if (!item) return;
      tabItem.forEach((el) => el.classList.remove('is-active'));
      tabContent.forEach((el) => el.classList.remove('is-show'));
      item.classList.add('is-active');
      let indexContent = event.target.dataset.showContent;
      tabContent[indexContent].classList.add('is-show');
    };
  }
  const tabs = document.querySelectorAll('.tab');
  if(tabs.length != 0) {
    tabs.forEach(tabHandler);
  }

  // Модуль .alert
  function alertHandler(close) {
    close.onclick = function (event) {
      let alertBlock = event.target.closest('.alert');
      if(!alertBlock) return;
      alertBlock.classList.add('is-hide');
      setTimeout(function() {
        alertBlock.remove();
      }, 400);
    };
  }
  const alertClose = document.querySelectorAll('.alert__close');
  if(alertClose.length != 0) {
    alertClose.forEach(alertHandler);
  }

  // Слайдеры
  var slider = $('.slider');
  // Слайдер баннеров
  $(slider).closest('.slider-banner').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: false
        }
      }
    ]
  });
  // Слайдер купили на этой недели
  $(slider).closest('.slider-img').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    // arrows: false
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    });
})(jQuery);
