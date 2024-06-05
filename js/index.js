var logIn = document.getElementById("logIn");
var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");
var signincheck = document.querySelector(".signincheck");
var signinError = document.querySelector(".signinError");

var usersList = [];

logIn.addEventListener("click", signIn);

//conditinsssssssssssssssssssssssssssssssssss

if (localStorage.getItem(usersList) != null) {
usersList = JSON.parse(localStorage.getItem(usersList));
} else {
usersList = [];
}

//functionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
function signIn() {
var user = {
    email: signInEmail.value,
    password: signInPassword.value,
};

if (signInEmail.value === "" || signInPassword.value === "") {
    signincheck.classList.replace("d-none", "d-block");
    signinError.classList.replace("d-block", "d-none");
}

if (correctEmailAndPassword(signInEmail, signInPassword)) {
    // window.location.href = "./page3.html";
    window.alert("ccccccc")
} else {
    signincheck.classList.replace("d-block", "d-none");
    signinError.classList.replace("d-none", "d-block");
}
}


function correctEmailAndPassword(email, password) {
for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].email === email && usersList[i].password === password) {
    localStorage.setItem("userName", usersList[i].name);
    return true;
    }
}
return false;
}
