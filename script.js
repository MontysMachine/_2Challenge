// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerAlphabet = 'abcdefghijklmnopqrtuvwxyz';
var num = '1234567890';
var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Write password to the #password input
function generatePassword(){
  var yesUppercase = confirm("Does your password require an uppercase letter? Click OK for yes or Cancel to no.");
  var yesNum = confirm("Does your password require a number? Click OK for yes or Cancel for skip.");
  var yesSpecChar = confirm("Does your password require a special character? Click OK for yes or Cancel for no.");
  var passwordLength = prompt("How long does your password need to be? Please enter a number");
  var password = "";
  passwordLength = Number(passwordLength);
  for(i = 0; i < passwordLength;){
    if (yesUppercase === true){
      password += alphabet[Math.floor(Math.random() * alphabet.length)];
      i++;
    }
    if (yesUppercase === false){
      password += lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)];
      i++;
    }
    if (yesNum === true){
      password += num[Math.floor(Math.random() * num.length)];
      i++;
    }
    if (yesSpecChar === true){
      password += specChar[Math.floor(Math.random() * specChar.length)];
      i++;
    }

  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);