$(document).ready(function () {
  $("#eye").click(function () {
    $(this).toggleClass("open");
    $(this).children("i").toggleClass("fa-eye-slash fa-eye");
    if ($(this).hasClass("open")) {
      // alert('Type text');
      $(this).prev().attr("type", "text");
    } else {
      $(this).prev().attr("type", "password");
    }
  });
});

const checkLastname = (lastname) => {
  if (!lastname) return "Hãy Nhập lại last name !";
  else if (lastname.length > 6) return "Last name tối đa 6 ký tự !";
  else return true;
};
const checkFirstname = (firstname) => {
  if (!firstname) return "Hãy Nhập lại firstname !";
  else if (firstname.length < 5) return "Firstname cần tối đa 6 ký tự !";
  else return true;
};
const checkUsername = (username) => {
  if (!username) return "Hãy Nhập lại Username !";
  else if (username.length < 5) return "Username cần tối thiểu 5 ký tự !";
  else return true;
};

const checkEmail = (email) => {
  if (!email) return "Hãy Nhập lại email !";
  else return true;
};
const checkPassword = (password) => {
  if (!password) return "Hãy Nhập lại Password !";
  else if (password.length < 5) return "Password cần tối thiểu 5 ký tự !";
  else return true;
};
const checkConfirmPassword = (confirmpassword, password) => {
  if (!confirmpassword) return "Hãy Nhập lại Password !";
  else if (confirmpassword.length < 5)
    return "Password cần tối thiểu 5 ký tự !";
  else if (confirmpassword.length != password)
    return "Password không chính xác !";
  else return true;
};
// ------------Validation---------------
const Validation = (form) => {
  const firstname = form.password.value;
  const lastname = form.password.value;
  const username = form.username.value;
  const email = form.password.value;
  const password = form.password.value;
  const confirmPassword = form.password.value;

  const errorUsername = document.getElementById("errorUsername");
  const errorPassword = document.getElementById("errorPassword");
  const errorLastname = document.getElementById("errorLastname");
  const errorFirstname = document.getElementById("errorFirstname");
  const errorconfirm = document.getElementById("errorConfirmPassword");
  const erroremail = document.getElementById("errorEmail");

  // Validation lastname
  let messageErrorLastname = checkUsername(lastname);
  errorLastname.innerHTML = messageErrorLastname;
  errorLastname.className = "message__error";

  // Validation firstname
  let messageFirstname = checkPassword(firstname);
  errorFirstname.innerHTML = messageFirstname;
  errorFirstname.className = "message__error";

   // Validation email
  let messageErrorEmail = checkUsername(email);
  erroremail.innerHTML = messageErrorEmail;
  erroremail.className = "message__error";

  let messageErrorUsername = checkUsername(username);
  errorUsername.innerHTML = messageErrorUsername;
  errorUsername.className = "message__error";

  // Validation Password
  let messageErrorPassword = checkPassword(password);
  errorPassword.innerHTML = messageErrorPassword;
  errorPassword.className = "message__error";

  let messageErrorConfirm= checkUsername(confirmPassword,password);
  errorconfirm.innerHTML = messageErrorConfirm;
  errorconfirm.className = "message__error";
};
