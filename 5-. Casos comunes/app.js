
var form = document.getElementById('contactForm');

form.onsubmit = function (e) {
    e.preventDefault();
    console.log('El correo es valido ', isValidEmail());
    console.log('El twitter es valido ', isValidTwitter());


}

var isValidEmail = function () {
    var email = document.getElementById('email');
    return /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)
}

var isValidPassword = function () {
    var password = document.getElementById('pwd');


}

//Validación de un usuario de twitter
var isValidTwitter = () => {
    var twitter = document.getElementById('twitter');

    return /^@(\w+)$/.test(twitter.test);
}