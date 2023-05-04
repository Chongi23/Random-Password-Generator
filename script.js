// Assignment Code
var generateBtn = document.querySelector("#generate");




//Start with password characters. Variable values her consist of arrays, these strings have acceptable characters .
//Lists arrays

  


  //Array of numeric Characters.

  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  //String of uppercase Characters.
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  //String of lowercase Characters.
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  //String of special characters.
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

 //This is where series of prompts begin.It will genterate the password with the users input.

 function generatePassword() {
 
  // The userSelect var will store the users preferences on wanting upppercase,lowercase,numeric,or special characters, 
  //this value will later be used in the for loop to generate random password.
  // it is stored in the function so page doesnt have to be refreshed each time you generate a password.

 var userSelect= []

  //Why did I use number of characters??**Because it is a sensible var to store prompt. should it be window.prompt?? ** NO you are already in the window.

  numberOfCharacters = prompt("How many characters would you like your password to be? Between 8-128");

  if (isNaN(numberOfCharacter)){
    return "Enter a Valid number.";
  }
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  return "Please choose valid number of characters.";
}
//If user doesnt enter any amount of characters,this message will return.
else if (numberOfCharacters === "") {
  return "Please choose valid number of characters.";
}
else {
  alert("Your new password is " + numberOfCharacters + "characters long.");

  



}

//Prompt Character type: Lowercase.
wantLowerCase = confirm("Do you want lowercase characters?");

if(wantLowerCase) {
   alert("Your password will have lower case characters.");
userSelect = userSelect.concat(lowercaseCharacters);
}
else{
  alert("Your password will not have lowercase letter.");

}

//Prompt Character type: Uppercase.

wantUpperCase = confirm("Do you want uppercase characters?");

if(wantUpperCase) {
   alert("Your password will have uppercase characters.");
   userSelect = userSelect.concat(uppercaseCharacters);
}
else{
  alert("Your password will not have uppercase characters.");

}

//Prompt character type: Numeric.

wantNumeric = confirm("Do you want numeric character?");

if(wantNumeric) {
   alert("Your password will have numeric characters.");
   userSelect = userSelect.concat(numericCharacters);
}
else{
  alert("Your password will not have numeric character.");
}

//Prompt character type: Special.

wantSpecial = confirm("Do you want special characters?");

if(wantSpecial) {
   alert("Your passwrod will have special characers.");
   userSelect = userSelect.concat(specialCharacters);
}
else{
  alert("Your password will not have special characters.");
}

var password = ""

for (var i=0; i < numberOfCharacters; i++){
  var index = Math.floor(Math.random() * userSelect.length)

var selectedChar = userSelect[index]
password += selectedChar 
}
return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
