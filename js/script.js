let validName = document.getElementById("first-name");
console.log(validName);
let lastName = document.getElementById("last-name");
console.log(lastName);
let password = document.getElementById("user-pass");
console.log(password);
let email = document.getElementById("user-email");
let validationMsg = document.querySelector(".validation-msg");
let checkE = email.toString().includes("@");

function validate() {
  if (
    validName.value != "" &&
    lastName.value != "" &&
    password.value != "" &&
    email.value != ""
  ) {
    validationMsg.innerHTML = "Success! Please check your email";
  }
  checkinfo();
}

function checkinfo() {
  if (validName.value == "") {
    document.getElementById("firstName-error").style.visibility = "visible";
    document
      .querySelector(".name-label")
      .querySelector(".disable").style.display = "block";
  }
  if (lastName.value == "") {
    document.getElementById("lastName-error").style.visibility = "visible";
    document
      .querySelector(".lastname-label")
      .querySelector(".disable").style.display = "block";
  }
  if (email.value == "") {
    document.getElementById("userEmail-error").style.visibility = "visible";
    document
      .querySelector(".email-label")
      .querySelector(".disable").style.display = "block";
  }
  if (password.value == "") {
    document.getElementById("userPassword-error").style.visibility = "visible";
    document
      .querySelector(".pass-label")
      .querySelector(".disable").style.display = "block";
  }
}
