// Page 404 error, Page non réaliser

var btnSend = document.querySelector('#btnSend')

btnSend.addEventListener('click', function () {
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    document.getElementById('divfolio').style.display = "none";
    document.getElementById('zonning').innerHTML = 'Merci,' + ` ${firstname} ${lastname}` + ' à bientôt';
    document.getElementById('btnBack').style.display = "block";
})