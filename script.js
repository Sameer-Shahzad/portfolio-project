console.log ("JS is working");

const passwordBox = document.getElementById ("password");
const copyy = document.getElementsByClassName("copyy")[0];
const passlength = 12; 

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+{}[]<>?/|~";
const allChars = uppercase + lowercase + number + symbols;

function createPassword () {
    let password = "";
    password += uppercase [Math.floor(Math.random() * uppercase.length)];
    password += lowercase [Math.floor(Math.random() * lowercase.length)];
    password += number [Math.floor(Math.random() * number.length)];
    password += symbols [Math.floor(Math.random() * symbols.length)];

    while ( passlength > password.length ) {
        password += allChars [Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

copyy.addEventListener("click", copyPassword);