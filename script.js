// Assignment code here

var generateBtn = document.querySelector("#generate");

const newLocal = 0;
// Write password to the #password input
function writePassword() {
  var password ="";
  var lowerCase =["abcdefghijklmnopqrstuvwxyz"];
  var capital =["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var symbol =["!@#$%^&*()_+=/"];
  var number =["0123456789"];
  var charactersChosen = 0;
  var newpass = "";
  var randomnumber = "";



  window.alert("Continue to set up your password.")

var islowerCase = window.confirm("Do you want lowercase letters?");
    if (islowerCase) {
   password = password.concat(lowerCase);
   
   charactersChosen++
    }

var iscapital = window.confirm("Do you want capital letters?");
    if (iscapital) {
      password = password.concat(capital);
   
   charactersChosen++
    }

var issymbol = window.confirm("Do you want symbols?");
    if (issymbol) {
      password = password.concat(symbol);
   
   charactersChosen++
    }

var isnumber = window.confirm("Do you want numbers?");
    if (isnumber) {
      password = password.concat(number);
   
   charactersChosen++
    }
  
console.log(password);

var passlength = window.prompt("How long should your password be?  8 - 128 characters!")
    for (var i=0; i < passlength; i++) {
      var randomnumber = Math.floor(Math.random() * password.length);
      newpass += password.substring(randomnumber, randomnumber + i) 
    }
    
    console.log(newpass);

    document.getElementById("newpassword").value = newpass;

  }
      // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);