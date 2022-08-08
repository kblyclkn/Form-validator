/* id ler ile değişken tanımlaması */
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repassword = document.querySelector('#repassword');
const phone = document.querySelector('#phone')
/* hatalı giriş yapıldığında eklenecek olan class kodları */
function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}
/* düzgün giriş yapıldığında eklenecek olan class kodları */

function success(input) {
    input.className = 'form-control is-valid'
}

/* mail valid kodu */
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(input.value)) {
        success(input);
    }else {
        error(input,'hatalı bir mail adresi')
    }
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if(input.value === "") {
            error(input, `${input.id} is required.`);
        }else {
            success(input);
        }
    });
   
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır.`)
    }else if (input.value.length > max ) {
        error(input, `${input.id} en fazla ${max} karakter olmalıdır.`)
    }else {
        success(input);
    }
}

function checkPasswords(input1,input2) {
    if (input1.value !== input2.value) {
        error(input2, "Parolalar eşleşmiyor")
    }
}

function checkPhone(input) {
    var exp = /^\d{10}$/;
    if(!exp.test(input.value))
    error(input,'Telefon 10 karakterli olmalıdır.');
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,repassword,phone]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,7,16);
    checkPasswords(password,repassword);
    checkPhone(phone)

})


