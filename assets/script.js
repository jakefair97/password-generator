// Assignment code here

var capLetters = [...Array(26)];
var lowLetters = [...Array(26)];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharStr =  " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var specialChars = specialCharStr.split("");


for (var i = 0; i<capLetters.length; i++) {
    capLetters[i] = String.fromCharCode(i + 65);
    lowLetters[i] = String.fromCharCode(i + 97);
}

function generatePassword() {
  var pwLen = parseInt(prompt("How many characters long do you want your password to be? Please enter a number between 8 and 128."))
  while (Number.isNaN(pwLen) || pwLen < 8 || pwLen > 128) {
    pwLen = parseInt(prompt("Please enter a number between 8 and 128."));
  }
  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
