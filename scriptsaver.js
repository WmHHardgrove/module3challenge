var isupperCase = window.confirm("Do you want uppercase letters?");
    if (isupperCase) {
      password = password.concat(upperCase);
   
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
      var random = Math.floor(Math.random()) * password.length;
    
  newpass + password.substring(randomnumber, randomnumber + 1)
    }

    console.log(newpass);

      document.getElementById("newpassword").value = newpass;


      // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
