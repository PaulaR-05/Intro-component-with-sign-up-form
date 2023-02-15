let validName = document.getElementById("first-name");
console.log(validName);
let lastName = document.getElementById("last-name");
console.log(lastName);
let password = document.getElementById("user-pass");
console.log(password);
let email = document.getElementById("user-email");

function checkinfo() {
  if (
    validName.value == "" ||
    lastName.value == "" ||
    password.value == "" ||
    email.value == ""
  ) {
    document.getElementById("firstName-error").style.visibility = "visible";
    document
      .querySelector(".name-label")
      .querySelector(".disable").style.display = "block";
    document.getElementById("lastName-error").style.visibility = "visible";
    document
      .querySelector(".lastname-label")
      .querySelector(".disable").style.display = "block";
    document.getElementById("userEmail-error").style.visibility = "visible";
    document
      .querySelector(".email-label")
      .querySelector(".disable").style.display = "block";
    document.getElementById("userPassword-error").style.visibility = "visible";
    document
      .querySelector(".pass-label")
      .querySelector(".disable").style.display = "block";
  }
}

function validate() {
  checkinfo();
}
