var passwordLength = 8;
var choice = [];
//arrays 
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","H","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = [" ", "!", "'", "#", "$", "%", "&", "*", "(", ")", "?"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correct = callChoice();
  var passwordText = document.querySelector("#password");
  if (correct) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}
//this fuction will pick element ramdomly from the arrays
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomI = Math.floor(Math.random() * choice.length);
    password = password + choice[randomI];
  }
  //and it will return a password with the options selected 
return password;
}
// will funtion will call the window where the user will start putting the information to generate the password.
function callChoice() {
  choice = [];
//first window to chose the number of words you'd like to have on your password 
  passwordLength = window.prompt(
    "how many characters do you want in password? (8 - 128 characters"
  );
  // if the answer is not a number it will pop up a window with an error to choose a number 'nan means not a number"
  if (
    isNaN(passwordLength) ||
    Number(passwordLength) < 8 ||
    Number(passwordLength) > 128
  ) {
    alert(
      "character must be a number between 8 to 128 digits. please try again."
    );
    return false;
  }
// if you choose lowercase it will select it ramdom the concat method will merge the arrays in the final password
  if (confirm("do you want lowercase letters in password")) {
    choice = choice.concat(lowerCase);
  }
  if (confirm("do you want uppercase letters in password")) {
    choice = choice.concat(upperCase);
  }

  if (confirm("do you want numbers in password")) {
    choice = choice.concat(numbers);
  }
  if (confirm("do you want special caracters in password")) {
    choice = choice.concat(specialCharacters);
  }
  return true;
}














