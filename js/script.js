$(document).ready(function($) {
    $('.adress__block').find('.adress-block__title').click(function(){
      $(this).next().slideToggle('fast')
      $(this).toggleClass('adress-block__title_active');
      $(".adress-block__text").not($(this).next()).slideUp('fast');
    });
  });

$(document).ready(function($) {
  $('.header__burger,.menu__item').click(function(event) {
    $('.header__burger,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 1000);
  });
});