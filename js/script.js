let validName = document.getElementById("first-name");
console.log(validName);
let lastName = document.getElementById("last-name");
console.log(lastName);
let password = document.getElementById("user-pass");
console.log(password);
let email = document.getElementById("user-email");

function checkinfo() {
  if (validName.value == "") {
    document.getElementById("firstName-error").style.visibility = "visible";
    document.querySelector(".disable").style.display = "block";
  }

  if (lastName.value == "") {
    document.getElementById("lastName-error").style.visibility = "visible";
    document.querySelector(".disable").style.display = "block";
  }
}

function checkEmail() {
  let emailInfo = email.includes("@");
  if (emailInfo == false || email.value == "") {
    document.getElementById("userEmail-error").style.visibility = "visible";
  }
  return false;
}
console.log(checkEmail);

function validate() {
  checkinfo();
  checkEmail();
}
