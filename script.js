const passwordEl = document.getElementById("password");
const copyEl = document.getElementById("copy");
const themeToggleEl = document.getElementById("themeToggle");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const lengthEl = document.getElementById("length");
const lengthDisplayEl = document.getElementById("lengthDisplay");
const generateEl = document.getElementById("generate");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}<>?/|";

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  passwordEl.select();
  document.execCommand("copy");
  alert("Password copied!");
});

themeToggleEl.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggleEl.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});


lengthEl.addEventListener("input", () => {
  lengthDisplayEl.value = lengthEl.value;
});

function generatePassword() {
  let chars = "";
  if (uppercaseEl.checked) chars += upperChars;
  if (lowercaseEl.checked) chars += lowerChars;
  if (numbersEl.checked) chars += numberChars;
  if (symbolsEl.checked) chars += symbolChars;
  
  if (chars === "") {
    passwordEl.value = "Select options!";
    return;
  }
  
  let password = "";
  for (let i = 0; i < lengthEl.value; i++) {
    const rand = Math.floor(Math.random() * chars.length);
    password += chars[rand];
  }
  passwordEl.value = password;
}

