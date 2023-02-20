// Assign character types to unique arrays
var capLetters = [...Array(26)];
var lowLetters = [...Array(26)];
for (var i = 0; i < capLetters.length; i++) {
    capLetters[i] = String.fromCharCode(i + 65);
    lowLetters[i] = String.fromCharCode(i + 97);
}
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharStr =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var specialChars = specialCharStr.split("");

function generatePassword() {
  //User decides how long password should be
  var PWLen = prompt("How many characters long do you want your password to be? Please enter a number between 8 and 128.")
  if (PWLen == null) {
    return
  }
  PWLen = parseInt(PWLen);

  while (Number.isNaN(PWLen) || PWLen < 8 || PWLen > 128) {
    PWLen = prompt("Please enter a number between 8 and 128.");
    if (PWLen == null) {
      return
    }
    PWLen = parseInt(PWLen);
  }

  //User decides whiich character types to use
  var useCapLet = prompt("Do you want your password to include capital letters? Y/N");
  if (useCapLet == null) {
    return
  }
  useCapLet = useCapLet.toUpperCase();

  var useLowLet = prompt("Do you want your password to include lowercase letters? Y/N");
  if (useLowLet == null) {
    return
  }
  useLowLet = useLowLet.toUpperCase();

  var useNum = prompt("Do you want your password to include numbers? Y/N");
  if (useNum == null) {
    return
  }
  useNum = useNum.toUpperCase();

  var useSpecChar = prompt("Do you want your password to include special characters? Y/N");
  if (useSpecChar == null) {
    return
  }
  useSpecChar = useSpecChar.toUpperCase();

  // Verify at least one character type is selected
  if (useCapLet != 'Y' && useLowLet != 'Y' && useNum != 'Y' && useSpecChar != 'Y') {
    alert("At least one character type must be selected. Password not generated.");
    return
  }

  // Push the selected character types to an array
  var PWChars = [];

  if (useCapLet == 'Y') {
    PWChars.push(capLetters);
  }
  if (useLowLet == 'Y') {
    PWChars.push(lowLetters);
  }
  if (useNum == 'Y') {
    PWChars.push(numbers);
  }
  if (useSpecChar == 'Y') {
    PWChars.push(specialChars);
  }
  
  // Generate the password based on selected criteria
  var tempChars = [...PWChars];
  var password = "";
  // This loop randomly assigns characters to the password, but it removes each array once it's used to ensure that each character type requested by the user is included
  for (i = 0; i < tempChars.length;){
    var X = Math.floor(Math.random() * tempChars.length);
    var Y = Math.floor(Math.random() * tempChars[X].length);
    password+= tempChars[X][Y];
    tempChars.splice(X, 1);
  }

  // Randomly assign the remaining characters
  for (i = 0; i < PWLen - PWChars.length; i++) {
    var X = Math.floor(Math.random() * PWChars.length);
    var Y = Math.floor(Math.random() * PWChars[X].length);
    password+= PWChars[X][Y];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password == undefined) {
    return
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
