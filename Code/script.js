var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button Click Worked!");

  // Password length variable:  
  var length = prompt("How many characters would you like in your password?");
    console.log(length);
  
   if (length === null) {   //immediate cancel button fix
   return "";
   } 

  if (+length > 7 && +length < 129) {
    length = +length; //converts length value from string to number.
    console.log(length);
  } else if (length === null) { //allows cancel button to work.
    return;
  } else {
      length = alert("Enter a number between 8 and 128."); 
      generatePassword();
  }
  // Password character length stored in var length.   

  // Uppercase, lowercase, numbers, and special characters variables:
  var charChoices = [];
  
  var upperCase = confirm("Would you like to include Uppercase Characters?");
  if (upperCase === true) {
    charChoices.push(upperCase);
  }

  var lowerCase = confirm("Would you like to include Lowercase Characters?");
  if (lowerCase === true) {
    charChoices.push(lowerCase);
  }

  var numberChars = confirm("Would you like to include Numbers?");
  if (numberChars === true) {
    charChoices.push(numberChars);
  }

  var specialChars = confirm("Would you like to include Special Characters?");
  if (specialChars === true) {
    charChoices.push(specialChars);
  }
  
  console.log(charChoices); 

  if (charChoices.length == 0) { // //Was at least one character type selected?
    alert("Please select at least one character type.");
    generatePassword(); 
  }
  // User Inputs Complete.  var length has character count.  other vars have true or false selected.

  var uppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var symbols = ["!","#","$",",","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","`","{","|","}","~"];
  
  var acceptableChars = [];

  //check if character types are needed.
  if (upperCase === true) { 
    acceptableChars = acceptableChars.concat(uppers);
  }

  if (lowerCase === true) {
    acceptableChars = acceptableChars.concat(lowers);
  }

  if (numberChars === true) {
    acceptableChars = acceptableChars.concat(numbers);
  }

  if (specialChars === true) {
    acceptableChars = acceptableChars.concat(symbols);
  }

  console.log(acceptableChars);   //concatenation check
  // Array acceptableChars now contains all possible characters for random selection.

  // create loop to randomly draw from acceptableChars length number of times.
  var passwordString = "";
  
  // if (!upperCase && !lowerCase && !numberChars && !specialChars) { // error handler
  //   return "";
  // }

  for (i = 0; i < length; i++) {
    var randomPosition = Math.floor(Math.random() * acceptableChars.length);
    console.log(randomPosition);
    
    passwordString = passwordString + acceptableChars[randomPosition]; //add new random character to passwordString.
    console.log(passwordString);
  }

  return passwordString;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to "Generate Password" button
generateBtn.addEventListener("click", writePassword);
