var btnaccepted = document.querySelector('.btnaccepted')
var btnrefuse = document.querySelector('.btnrefuse');

btnaccepted.addEventListener('click', function(){
    document.getElementById('cookies').style.display = "none";
    console.log('test')
})

btnrefuse.addEventListener('click', function(){
    document.querySelector('.modale').style.display = "block";
    console.log('test')
})