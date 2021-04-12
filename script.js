// Assignment Code


// Creates an output of string and variable that can be called on as a key.
function _1initializePrompts() {
  
  // Sanity check for starting the function
  console.log("initializing prompts...")
  
  // Prompts for setting the key values
  var pwLength = prompt("What length would you like the pw to be? \n (8 - 128 characters)","10")
  
  if (pwLength > 128 || pwLength < 8)
  {alert("Please use input a value between 8-128.");}
  
  else
  {var useSpecial = confirm("Do you want to use: Special characters?");
  var useLowercase = confirm("Do you want to include: Lowercase letters?");
  var useUppercase = confirm("Do you want to include: Uppercase letters?");
  var useNumeric = confirm("Do you want to include: Numbers?");
  
  var boolKey = [pwLength,useSpecial,useLowercase,useUppercase,useNumeric];}
  return boolKey;
}

// Creates an output of 
function _2generatePassword(pw_length,boolSpecial,boolLowercase,boolUppercase,boolNumeric){
  
  // Sanity check for inside password generator
  console.log("generating password...")
  
  // Data arrays
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var special = ["!","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
  var lowercase = alpha.split("");
  var uppercase = alpha.toUpperCase().split("");
  var numeric = ["1","2","3","4","5","6","7","8","9","0"];
  
  
  var pool = [];
  if (boolSpecial) {
    pool = pool.concat(special)
  }
  if (boolLowercase) {
    pool = pool.concat(lowercase)
  }
  if (boolUppercase) {
    pool = pool.concat(uppercase)
  }
  if (boolNumeric) {
    pool = pool.concat(numeric)
  }
  
  var password = [];
  for (let i = 0; i < pw_length; i++) {
    password[i] = get_r_char(pool);
  }
  
  function get_r_char(pool_arr){
    poolindex = Math.floor( pool_arr.length * Math.random() );
    var character = pool[poolindex]
    
    return character
  }
  passwordnoarr = password.join("")
  
  return passwordnoarr;
}

// Write password to the #password input
function _3writePassword(password) {
  console.log("writing password")
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Runs the set of functions for initial prompts, generating password, and displaying the password
function run() {
  
  console.log("running...")
  
  let key = _1initializePrompts();
  let password = _2generatePassword(key[0],key[1],key[2],key[3],key[4]);
  // alert(key);
  alert(password);
  _3writePassword(password);
}

// Add event listener to generate button

// Highlight the button "gen pw"
var generatePwBtn = document.querySelector("#generate");

// On the "gen pw" button call the function "run"
generatePwBtn.addEventListener("click", run);