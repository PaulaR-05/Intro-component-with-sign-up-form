let validName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let password = document.getElementById("user-pass");
let email = document.getElementById("user-email");
let validationMsg = document.querySelector(".validation-msg");

function validate() {
  if (
    email.includes("@") &&
    validName.value != "" &&
    lastName.value != "" &&
    password.value != "" &&
    email.value != ""
  )
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
