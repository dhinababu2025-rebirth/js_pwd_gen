let getPwd = document.getElementById("generated-password");    //gets the content of <p> in the o/p panel
let copyPassword = document.getElementById("pwd-copy");              //button to copy password
let setPwdLength = document.getElementById("pwd-length");            //number <input> for password length
let includeUC = document.getElementById("inc-uppercase");         //checkbox for including uppercases in the password
let includeLC = document.getElementById("inc-lowercase");         //checkbox for including lowercases in the password
let includeNum = document.getElementById("inc-numbers");           //checkbox for including numbers in the password
let includeSym = document.getElementById("inc-symbols");           //checkbox for including symbols in the password
let generatePwd = document.getElementById("generate-the-password"); //button for Generating New Password


generatePwd.addEventListener('click', () => {
    let includeUppercase = includeUC.checked;
    let includeLowercase = includeLC.checked;
    let includeNumber = includeNum.checked;
    let includeSymbol = includeSym.checked;
    let setPasswordLength = parseInt(setPwdLength.value, 10);

    if(setPasswordLength < 4 || setPasswordLength > 10) {
        alert("Please enter a password length in the range of 4 to 10 characters only.")
        return;
    }

    let passwordCharacters = '';
    if (includeUppercase) passwordCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) passwordCharacters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumber) passwordCharacters += '0123456789';
    if (includeSymbol) passwordCharacters += '@$!%*?&';

    if (passwordCharacters.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    let generatedPassword = '';
    for (let i = 0; i < setPasswordLength; i++) {
        const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        generatedPassword += passwordCharacters[randomIndex];
    }

    getPwd.textContent = generatedPassword; 
});

// copyPassword.addEventListener('click', () => {
//     // navigator.clipboard.writeText(getPassword);
//     navigator.clipboard.writeText(getPwd.textContent);

//     alert("Password Copied");
// });

copyPassword.addEventListener('click', () => {
    navigator.clipboard.writeText(getPwd.textContent);
    alert("Password Copied");
});
