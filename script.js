const passwordInput = document.getElementById("password");

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const strengthText = document.getElementById("strengthText");
const strengthFill = document.getElementById("strengthFill");


// Character sets

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

const numberChars = "0123456789";

const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";


// Update length value

lengthSlider.addEventListener("input", function () {

    lengthValue.textContent = lengthSlider.value;

});


// Generate password

function generatePassword() {

    const length = parseInt(lengthSlider.value);

    let characters = "";

    // Add selected character types

    if (uppercase.checked) {
        characters += uppercaseChars;
    }

    if (lowercase.checked) {
        characters += lowercaseChars;
    }

    if (numbers.checked) {
        characters += numberChars;
    }

    if (symbols.checked) {
        characters += symbolChars;
    }


    // Prevent empty character set

    if (characters.length === 0) {

        alert("Please select at least one option.");

        return;

    }


    let password = "";


    // Generate password

    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];

    }


    passwordInput.value = password;

    checkStrength(password);

}


// Check password strength

function checkStrength(password) {

    let score = 0;


    // Length

    if (password.length >= 8) {
        score++;
    }

    if (password.length >= 12) {
        score++;
    }


    // Character types

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[a-z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }


    if (score <= 2) {

        strengthText.textContent = "Weak";

        strengthFill.style.width = "30%";

        strengthFill.style.background = "#ef4444";

    }

    else if (score <= 4) {

        strengthText.textContent = "Medium";

        strengthFill.style.width = "60%";

        strengthFill.style.background = "#f59e0b";

    }

    else {

        strengthText.textContent = "Strong";

        strengthFill.style.width = "100%";

        strengthFill.style.background = "#22c55e";

    }

}


// Generate button

generateBtn.addEventListener("click", generatePassword);


// Copy password

copyBtn.addEventListener("click", function () {

    if (passwordInput.value === "") {

        alert("Generate a password first.");

        return;

    }


    navigator.clipboard.writeText(passwordInput.value);

    copyBtn.textContent = "✅";


    setTimeout(function () {

        copyBtn.textContent = "📋";

    }, 1500);

});


// Generate password when page opens

generatePassword();
