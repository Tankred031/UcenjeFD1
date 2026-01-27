$(document).foundation()

$(function () {
  var $menu = $('#desktop-menu');

  $('.menu-icon').on('click', function () {
    if (window.matchMedia('(max-width: 639px)').matches) {
      $menu.toggleClass('is-open');
    }
  });
});

