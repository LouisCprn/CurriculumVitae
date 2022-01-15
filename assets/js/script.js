var btnaccepted = document.querySelector('.btnaccepted')
var btnrefuse = document.querySelector('.btnrefuse');
var btnSettings = document.querySelector('.item');
var btnColor = document.querySelectorAll('.btnperso')

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

btnColor.addEventListener('click', function() {
    document.querySelector('.btnAccept');
})