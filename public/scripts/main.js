// Modal

$('.about-button').click(function() {
  $('.about').toggleClass('is-open');
});

$('.close').click(function() {
  $('.about').removeClass('is-open');
});

$('.about').click(function() {
  $('.about').removeClass('is-open');
});