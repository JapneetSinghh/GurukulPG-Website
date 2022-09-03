const submitForm = document.querySelector('#submitForm');

document.getElementById('myName').addEventListener('blur', validateName);
document.getElementById('myPhone').addEventListener('blur', validatePhone);
document.getElementById('myEmail').addEventListener('blur', validateEmail);
window.addEventListener('DOMContentLoaded', () => {
  generate();
})
const errorBox = document.querySelector('.errorBox');
const errorContent = document.querySelector('.errorContent');
var nameError = 0;
function validateName() {
  const name = document.getElementById('myName');
  const re = /^[a-zA-Z ]{2,15}$/;
  if (!re.test(name.value)) {
    errorBox.style.opacity = '1';
    errorContent.textContent = 'Name must have 2 to 15 letters'
    name.parentElement.classList.remove('noError');
    name.parentElement.classList.add('error');
    nameError = 1;
  } else {
    errorBox.style.opacity = '0';
    name.parentElement.classList.remove('error');
    name.parentElement.classList.add('noError');
    nameError = 0;
  }
}
var emailError = 0;

function validateEmail() {
  const email = document.getElementById('myEmail');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    errorBox.style.opacity = '1';
    errorContent.textContent = 'Please Enter A valid Email'
    email.parentElement.classList.remove('noError');
    email.parentElement.classList.add('error');
    emailError = 1;


  } else {
    errorBox.style.opacity = '0';
    email.parentElement.classList.remove('error');
    email.parentElement.classList.add('noError');
    emailError = 0;

  }
}
var phoneError = 0;

function validatePhone() {
  const phone = document.getElementById('myPhone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    errorBox.style.opacity = '1';
    errorContent.textContent = 'Please Enter A valid Phone Number'
    phone.parentElement.classList.remove('noError');
    phone.parentElement.classList.add('error');
    phoneError = 1;


  } else {
    errorBox.style.opacity = '0';
    phone.parentElement.classList.remove('error');
    phone.parentElement.classList.add('noError');
    phoneError = 0;

  }
}

let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let status = document.getElementById('status');
status.innerText = "Captcha Generator";

generate = () => {
  // console.log(status)
  let first = alphabets[Math.floor(Math.random() * alphabets.length)];
  let second = Math.floor(Math.random() * 10);
  let third = Math.floor(Math.random() * 10);
  let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
  let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
  let sixth = Math.floor(Math.random() * 10);
  captcha = first.toString() + second.toString() + third.toString() + fourth.toString() + fifth.toString() + sixth.toString();
  document.getElementById('generated-captcha').value = captcha;
  document.getElementById("entered-captcha").value = '';
  status.innerText = "Captcha Generator"
}
let captchaError = -1;
check = () => {
  console.log(status)
  let userValue = document.getElementById("entered-captcha").value;
  console.log(userValue);
  if (userValue === captcha) {
    status.innerText = "Correct!!"
    errorBox.style.opacity = '0';
    captchaError = 0;
  } else {
    errorBox.style.opacity = '1';
    errorContent.textContent = 'Enter Valid Captcha'
    status.innerText = "Try Again!!"
    document.getElementById("entered-captcha").value = '';
    captchaError = 1;
  }
}


submitForm.addEventListener('click', () => {
  const captchaBtn = document.getElementById('captchabtn');
  const name = document.getElementById('myName');
  const phone = document.getElementById('myPhone');
  const email = document.getElementById('myEmail');
  let userValue = document.getElementById("entered-captcha").value;

  if (name.value === '' || phone.value === '' || email.value === '') {
    errorBox.style.opacity = '1';
    errorContent.textContent = 'Please Fill The Form In Order To Submit';
  }
  else if (nameError === 1 || phoneError === 1 || emailError === 1) {
    errorBox.style.opacity = '1';
    errorContent.textContent = 'Please Enter Details Correctly';
  }
   else if (captchaError === -1 || userValue === '') {
    errorBox.style.opacity = '1';
    errorContent.textContent = 'Please Fill And Check The Captcha';
  }
    else if (captchaError === 1) {
    errorBox.style.opacity = '1';
    errorContent.textContent = 'Please Click Check Btn To Check Captcha';
  }
  else {
    errorBox.style.opacity = '0';
    captchaBtn.click();
    if(captchaError===0){
      document. querySelector("form[name='myForm']").submit();

    }
  }

});
