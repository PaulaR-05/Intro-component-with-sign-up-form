let validName = document.getElementById("first-name");
console.log(validName);
let lastName = document.getElementById("last-name");
console.log(lastName);
let password = document.getElementById("user-pass");
console.log(password);

function checkinfo() {
  if (validName.value == "" || lastName.value == "" || password == "") {
    document.getElementById("firstName-error").style.visibility = "visible";
    document.getElementById("lastName-error").style.visibility = "visible";
    document.getElementById("userPassword-error").style.visibility = "visible";
  }
}

function validate() {
  checkinfo();
}
