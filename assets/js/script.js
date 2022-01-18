// Les Cookies

var btnaccepted = document.querySelector('.btnaccepted')
var btnrefuse = document.querySelector('.btnrefuse');
var btnSettings = document.querySelector('.item');

btnaccepted.addEventListener('click', function () {
  document.getElementById('cookies').style.display = "none";

})

btnrefuse.addEventListener('click', function () {
  document.querySelector('.modale').style.display = "block";
  document.getElementById('cookies').style.display = "none";

})

btnSettings.addEventListener('click', function () {
  document.querySelector('.modale').style.display = "none";
})

// Section personnalisation des cookies

var greenList = document.querySelectorAll('.btnperso');

greenList.forEach(function (green) {
  green.addEventListener('click', function (e) {
    e.target.classList.toggle('btngreen')
    e.target.nextElementSibling.classList.remove('btnred')
  })
})

var redList = document.querySelectorAll('.btnperso2');

redList.forEach(function (red) {
  red.addEventListener('click', function (e) {
    e.target.classList.toggle('btnred')
    e.target.previousElementSibling.classList.remove('btngreen')
  })
})

var btnmodale = document.getElementById('btnmodale')

btnmodale.addEventListener('click', function () {
  swal("A wild Pikachu appeared! What do you want to do?", {
    buttons: {
      cancel: "Run away!",
      catch: {
        text: "Throw Pokéball!",
        value: "catch",
      },
      defeat: true,
    },
  })
    .then((value) => {
      switch (value) {

        case "defeat":
          swal("Pikachu fainted! You gained 500 XP!");
          break;

        case "catch":
          swal("Gotcha!", "Pikachu was caught!", "success");
          break;

        default:
          swal("Got away safely!");
      }
    });
})