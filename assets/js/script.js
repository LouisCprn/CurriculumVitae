var btnaccepted = document.querySelector('.btnaccepted')
var btnrefuse = document.querySelector('.btnrefuse');
var btnSettings = document.querySelector('.item');

btnaccepted.addEventListener('click', function(){
    document.getElementById('cookies').style.display = "none";

})

btnrefuse.addEventListener('click', function(){
    document.querySelector('.modale').style.display = "block";
    document.getElementById('cookies').style.display = "none";

})

btnSettings.addEventListener('click', function(){
    document.querySelector('.modale').style.display = "none";
})

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

