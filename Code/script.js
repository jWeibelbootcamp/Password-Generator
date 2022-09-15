var charNumber;
var upperCase;
var lowerCase;
var numbers;
var specialChars;

var promptCheck;

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




//
if (document.getElementById("generate").clicked == true) { //this may be bullshit
  charNumber = prompt("How many characters would you like?\n(Between 8 and 128)");
}  

if (charNumber < 8 || typeof(charNumber) != "number") {
    charNumber = prompt("Enter a number between 8 and 128.");
  }
  else if (charNumber > 128) {
    charNumber = prompt("Enter a number between 8 and 128.");
  } else {
    promptCheck = true;
}
//Now charNumber should have a useable value and promptCheck should have a value of true.  

// Prompt for remaining inputs.
if (promptCheck == true) {
  upperCase = prompt("Would you like to include Uppercase Characters?\n(OK for yes, Cancel for no)");
}

if (upperCase == ) //find out what is returned upon OK and Cancel button press.

var lowerCase = prompt("Would you like to include Lowercase Characters?\n(OK for yes, Cancel for no)");


var numbers = prompt("Would you like to include Numbers?\n(OK for yes, Cancel for no)");


var specialChars = prompt("Would you like to include Special Characters?\n(OK for yes, Cancel for no)");



