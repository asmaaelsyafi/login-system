var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");
var register = document.getElementById("register");
var alertCheck = document.querySelector(".alertCheck");
var alertSuccess = document.querySelector(".alertSuccess");
var alertExist =document.querySelector('.alertExist');



var usersList = [];

register.addEventListener('click',signUp)


//conditinsssssssssssssssssssssssssssssssssss
if(localStorage.getItem(usersList)!= null){
  usersList=JSON.parse(localStorage.getItem(usersList))
}else{
  usersList=[];
}

//functionssssssssssssssssssssssssssssssssssss
function signUp(){
  var user = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };
  if( emailValidation(userEmail.value)&& 
      newEmail(userEmail.value))
      {
    usersList.push(user);
    localStorage.setItem('user',JSON.stringify(usersList))
    reset();
    console.log(usersList);
  }
  else{
    alteration();
    
  }
}

function reset() {
  userName.value = null;
  userEmail.value = null;
  userPassword.value = null;
}

function alteration() {
  if (
    userName.value != "" && 
    userEmail.value != "" &&
    userPassword.value != "") {
    alertSuccess.classList.replace("d-none", "d-block");
    alertCheck.classList.replace("d-block", "d-none");
    alertExist.classList.replace('d-block','d-none')
  }
  else{
    alertCheck.classList.replace("d-none", "d-block");
    alertSuccess.classList.replace("d-block", "d-none");
    alertExist.classList.replace('d-block','d-none')
  }

  for(var i=0;i<usersList.length;i++){
    if(userEmail.value===usersList[i].email){
      alertCheck.classList.replace("d-block", "d-none");
      alertSuccess.classList.replace("d-block", "d-none");
      alertExist.classList.replace('d-none','d-block')
      console.log('repeted')
    }
  }
}

function emailValidation(email){
  var emailRegx =/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegx.test(email);
}

function newEmail(email){
  for(var i=0;i<usersList.length;i++){
    if(usersList[i].email===email){
      return false;
    }
  }
  return true;
}


//-------------------------------------------------------------------





