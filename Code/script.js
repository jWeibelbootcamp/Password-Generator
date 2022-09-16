var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button Click Worked!");

  // Password length variable:  
  var length = prompt("How many characters would you like in your password?");
    console.log(length);
     
  if (+length > 7 && +length < 129) {
    length = +length; //converts length value from string to number.
    console.log(length);
  } else if (length === null) { //allows cancel button to work.
    return " "
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

  var numbers = confirm("Would you like to include Numbers?");
  if (numbers === true) {
    charChoices.push(numbers);
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




  //3.  generate the password
  //    a.  randomize the confirmed character types the selected amount of times. 
  //            math.floor(math.random())
  //4.  display the password on the screen








  return "Generated password will go here."
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to "Generate Password" button
generateBtn.addEventListener("click", writePassword);

//new code effort above here

// var charNumber;
// var upperCase;
// var lowerCase;
// var numbers;
// var specialChars;

// var promptCheck; //makes sure an acceptable character count is entered

//   //Prompt text entry only returns string values.  Button Click only returns boolean values. Convert strings to numbers with Number().

// function generatePassword() {

//   charNumber = prompt("How many characters would you like in your password?");
  
//   Number(charNumber); //converts user input string type to number type

//   while (charNumber != ) {
//     charNumber = prompt("Enter a number between 8 and 128.");
//   }

//   if (charNumber > 7 && charNumber < 129) {
//     promptCheck = true;
//   } else {
//     promptCheck = false;
//   }

//   for (promptCheck) {//not done here
//     charNumber = prompt("Enter a number between 8 and 128.");
//   }


//  // Now charNumber should have an acceptable value and promptCheck should have a value of true.  

//   if (promptCheck == true) {
//     upperCase = prompt("Would you like to include Uppercase Characters?\n(OK = yes, Cancel = no)"); //i assume this assigns a boolean value to upperCase.
//   }

//   lowerCase = prompt("Would you like to include Lowercase Characters?\n(OK = yes, Cancel = no)");

//   numbers = prompt("Would you like to include Numbers?\n(OK = yes, Cancel = no)");

//   specialChars = prompt("Would you like to include Special Characters?\n(OK = yes, Cancel = no)");
// }


// //Create an array instead of a long string to contain with every possible password character.

// //Generate the password
// //use a loop to randomly select from each 'True' character type 'charNumber' number of times.

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to "Generate Password" button
// generateBtn.addEventListener("click", writePassword);