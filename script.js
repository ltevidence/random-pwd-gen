let password = document.getElementById("password");

function genPassword(){
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 12;
  password = "";
  
  for(let i = 0; i <= passwordLength; i++){
    let randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  
  document.getElementById("password").value = password;
}


function copyPassword(){
  let copyText = document.getElementById('password');
  copyText.select();
  document.execCommand("copy");
}