var charNumber;
var upperCase;
var lowerCase;
var numbers;
var specialChars;

var promptCheck; //makes sure an acceptable character count is entered

//write a generatePassword();  put all user prompts inside this function.

function generatePassword() {
  charNumber = prompt("How many characters would you like?\n(Between 8 and 128)");
  //Prompt text entry only returns string values.  Button Click only returns boolean values. Convert strings.

  if (typeof(charNumber) != "number") { //will always be a string... how to check
    charNumber = prompt("Enter a number between 8 and 128.");
    else if (charNumber < 8 || typeof(charNumber) != "number") {
      charNumber = prompt("Enter a number between 8 and 128.");
  } else if (charNumber > 128) {
    charNumber = prompt("Enter a number between 8 and 128.");
  } else {
    promptCheck = true;   
  }

  //Now charNumber should have an acceptable value and promptCheck should have a value of true.  

  if (promptCheck == true) {
    upperCase = prompt("Would you like to include Uppercase Characters?\n(OK = yes, Cancel = no)"); //i assume this assigns a boolean value to upperCase.
  }

  lowerCase = prompt("Would you like to include Lowercase Characters?\n(OK = yes, Cancel = no)");

  numbers = prompt("Would you like to include Numbers?\n(OK = yes, Cancel = no)");

  specialChars = prompt("Would you like to include Special Characters?\n(OK = yes, Cancel = no)");
}


//Create an array instead of a long string to contain with every possible password character.

//Generate the password
//use a loop to randomly select from each 'True' character type 'charNumber' number of times.

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to "Generate Password" button
generateBtn.addEventListener("click", writePassword);