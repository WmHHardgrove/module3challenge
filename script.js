// Assignment code here

var generateBtn = document.querySelector("#generate");

const newLocal = 0;
// Write password to the #password input
function writePassword() {
  var password ="";
  var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var capital =["A","B","C","D"];
  var symbol =["!","@","#","$"];
  var number =["0","1","2","3","4","5","6","7","8","9"];
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
      var random = Math.floor(Math.random() * password.length);
    
  newpass = password.substring(randomnumber, randomnumber + 1)
    }

    console.log(newpass);

      document.getElementById("newpassword").value;

  }
      // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);