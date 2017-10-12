/* ----------------------------------------------------------------------------------------------------
// logo
---------------------------------------------------------------------------------------------------- */
$(function(){
  var headerHeight = $('#l-header').outerHeight();
  $(window).on('load scroll', function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > headerHeight) {
      $('#l-header').addClass('is-fixed');
      $('#logo').attr('src', $('#logo').attr('src').replace('-white','-black'));
    } else {
      $('#l-header').removeClass('is-fixed');
      $('#logo').attr('src', $('#logo').attr('src').replace('-black','-white'));
    }
  });
});


/* ----------------------------------------------------------------------------------------------------
// mainImg slide
---------------------------------------------------------------------------------------------------- */
$(function(){
  var $interval = 7500;
  var $speed = 2000;
  $('.mainImg__child').css({
    'position':'relative',
    'overflow':'hidden'
  });

  $('.mainImg__child').hide().css({
    'position':'absolute',
    'top':0,
    'left':0
  });

  $('.mainImg__child:first').addClass('is-active').show();

  setInterval(function(){
    var $active = $('.mainImg__child.is-active');
    var $next = ($active.next('.mainImg__child').length) ? $active.next('.mainImg__child'):$('.mainImg__child:first');

    $active.fadeOut($speed).removeClass('is-active');
    $next.fadeIn($speed).addClass('is-active');
  },$interval);
});


/* ----------------------------------------------------------------------------------------------------
// PROFILE of TENMA slide
---------------------------------------------------------------------------------------------------- */
$(window).on('load', function() {
  $('.responsive').slick({
      accessibility: false,
      useCSS: true,
      infinite: true,
      easing: 'easeInOutCubic',
      dots: false,
      arrows: false,
      variableWidth: true,
      centerMode: false,
      centerPadding: 0,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 1000,
      autoplay: false,
      responsive: [
      {
        breakpoint: 1280,
        settings: {
          variableWidth: false,
          centerPadding: '15px',
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          centerMode: true,
          centerPadding: '45px',
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 600
        }
      }
    ]
  });

  $('.slick-prev').on('click', function(){
    $('.responsive').slick('slickPrev');
  });
  $('.slick-next').on('click', function(){
    $('.responsive').slick('slickNext');
  });
});


/* ----------------------------------------------------------------------------------------------------
// PROPERTY of TENMA is-active
---------------------------------------------------------------------------------------------------- */
$(function(){
  $('.property__item').on('hover', function() {
    $(this).next('.property__item').find('.property__btn--item').toggleClass('is-active');
    $(this).find('.property__btn--item').toggleClass('is-active');
    $(this).prev('.property__item').find('.property__img').toggleClass('is-active');
  });
  $('.property__link').on('hover', function() {
    $(this).children('.property__btn--item').toggleClass('is-active');
  });
});