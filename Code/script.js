var charNumber;
var upperCase;
var lowerCase;
var numbers;
var specialChars;

var clicked; //using this to check if button is pressed i guess
var promptCheck; //makes sure an acceptable character count is entered

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to "Generate Password" button
generateBtn.addEventListener("click", writePassword);


//Gather User Input
if (document.getElementById("generate").clicked == true) { //this may be bullshit - supposed to be a condition that the "Generate Password" button has been clicked.
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
//Now charNumber should have an acceptable value and promptCheck should have a value of true.  

// Prompt for remaining inputs.
if (promptCheck == true) {
  upperCase = prompt("Would you like to include Uppercase Characters?\n(OK = yes, Cancel = no)"); //i assume this assigns a boolean value to upperCase.
}

lowerCase = prompt("Would you like to include Lowercase Characters?\n(OK = yes, Cancel = no)");

numbers = prompt("Would you like to include Numbers?\n(OK = yes, Cancel = no)");

specialChars = prompt("Would you like to include Special Characters?\n(OK = yes, Cancel = no)");

//Generate the password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
