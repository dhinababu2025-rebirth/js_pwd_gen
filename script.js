let getPwd = document.getElementById("generated-password");    //gets the content of <p> in the o/p panel
let copyPassword = document.getElementById("pwd-copy");              //button to copy password
let setPwdLength = document.getElementById("pwd-length");            //number <input> for password length
let includeUC = document.getElementById("inc-uppercase");         //checkbox for including uppercases in the password
let includeLC = document.getElementById("inc-lowercase");         //checkbox for including lowercases in the password
let includeNum = document.getElementById("inc-numbers");           //checkbox for including numbers in the password
let includeSym = document.getElementById("inc-symbols");           //checkbox for including symbols in the password
let generatePwd = document.getElementById("generate-the-password"); //button for Generating New Password


generatePwd.addEventListener('click', () => {

    // button animation with tailwind classes
        generatePwd.classList.remove("bg-slate-100") // cant add another bg while there is an existing bg as inline class
        generatePwd.classList.remove("hover:bg-amber-300") // cant add another bg while there is an existing bg as inline class

        generatePwd.classList.add("bg-green-300");
        setTimeout(() => {
            generatePwd.classList.remove("bg-green-300");
            generatePwd.classList.add("bg-slate-100");
            generatePwd.classList.add("hover:bg-amber-300")
        },200);

    let includeUppercase = includeUC.checked;
    let includeLowercase = includeLC.checked;
    let includeNumber = includeNum.checked;
    let includeSymbol = includeSym.checked;
    let setPasswordLength = parseInt(setPwdLength.value, 10);

    if(setPasswordLength < 4 || setPasswordLength > 10) {
        alert("Please enter a password length in the range of 4 to 10 characters only.")
        return;
    }
    if (!(includeUppercase || includeLowercase || includeSymbol || includeNumber)) {
        alert("Please select at least one character type.");
        return;   // Breaks the event function from executing further
    }

    let passwordCharacters = '';
    let upperCase = '';
    let lowerCase = '';
    let numValues = '';
    let symValues = '';
    if (includeUppercase) 
        upperCase += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) 
        lowerCase += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumber) 
        numValues += '0123456789';
    if (includeSymbol) 
        symValues += '@$!%*?&';
// Generating the required set of characters as a string of length 100.
let ups = upperCase.length - 1;
let lows = lowerCase.length - 1;
let nums = numValues.length - 1;
let symbs = symValues.length - 1;
while(passwordCharacters.length < 200) {            
    // the elegible chars are jumbled with some repetitions to form a string of 200 chars, from which new pwd will be generated.
    if (upperCase.length > 0) {                     
        // checks if upperCase is to be included in password generation
        if (ups < 0) ups = upperCase.length - 1;    
        // checks if all uppercase chars are traversed, and resets the iterations if necessary
        passwordCharacters += upperCase[ups--];     
        // adds the currently pointed uppercase char to the string of elegible chars for pwd gen.
    } 
    if (lowerCase.length > 0) {
        if (lows < 0) lows = lowerCase.length - 1;
        passwordCharacters += lowerCase[lows--];
    } 
    if (numValues.length > 0) {
        if (nums < 0) nums = numValues.length - 1;
        passwordCharacters += numValues[nums--];
    }
    if (symValues.length > 0) {
        if (symbs < 0) symbs = symValues.length - 1;
        passwordCharacters += symValues[symbs--];
    }
}

    
// let len = passwordCharacters.length;
    let generatedPassword = '';
    
    for (let i = 0; i < setPasswordLength; i++) {
        const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        generatedPassword += passwordCharacters[randomIndex];
        // if (takenOne === false) {
        // const randomIndex = Math.floor(Math.random() * takeFirstLength);
        
        // takenOne = true;
        // takenTwo = true;
        // // takenThree = false;
        // takenFour = false;
        // continue;
        // }
        // if (takenTwo === false) {
        // const randomIndex = Math.floor(Math.random() * (takeSecondLength - takeFirstLength) + takeFirstLength);
        // generatedPassword += passwordCharacters[randomIndex];
        // takenOne = true;
        // takenTwo = true;
        // takenThree = true;
        // takenFour = false;
        // continue;
        // }
        // if (takenThree === false) {
        // const randomIndex = Math.floor(Math.random() * (takeThirdLength - takeSecondLength) + takeSecondLength);
        // generatedPassword += passwordCharacters[randomIndex];
        // // takenOne = false;
        // takenTwo = false;
        // takenThree = true;
        // takenFour = true;
        // continue;
        // }
        // if (takenTwo === false) {
        // const randomIndex = Math.floor(Math.random() * ((len - 1) - takeThirdLength) + takeThirdLength);
        // generatedPassword += passwordCharacters[randomIndex];
        // takenOne = true;
        // takenTwo = true;
        // takenThree = true;
        // takenFour = false;
        // continue;
        // }
    }

    getPwd.textContent = generatedPassword; 
    getPwd.classList.remove("opacity-50");
});

// copyPassword.addEventListener('click', () => {
//     // navigator.clipboard.writeText(getPassword);
//     navigator.clipboard.writeText(getPwd.textContent);

//     alert("Password Copied");
// });

copyPassword.addEventListener('click', () => {
    navigator.clipboard.writeText(getPwd.textContent);
     // button animation for copy link
        copyPassword.classList.remove("text-gray-50") // cant add another bg while there is an existing bg as inline class
        copyPassword.classList.remove("hover:text-lime-200") // cant add another bg while there is an existing bg as inline class

        copyPassword.classList.add("text-green-400");
        setTimeout(() => {
            copyPassword.classList.remove("text-green-400");
            copyPassword.classList.add("text-gray-50");
            copyPassword.classList.add("hover:text-lime-200");
            alert("Password Copied");
        },500);

});
