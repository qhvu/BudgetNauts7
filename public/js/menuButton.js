
document.getElementById('button').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});


$('.nav-link').on('click', function() {
  $('.active-link').removeClass('active-link');
  $(this).addClass('active-link');
});



