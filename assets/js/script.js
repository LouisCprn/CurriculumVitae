// NAVBAR
function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');

  burger.addEventListener('click', function () {
      burger.classList.toggle('show-x');
      nav.classList.toggle('show');
  })
}

navSlide()