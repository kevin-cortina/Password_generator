//objectives

//when click generate password-presented a series of prompts for password criteria
//8 characters no more than 128
//to confirm include lowercase, uppercase, numeric, and/or special characters
//validated and one character is atleast selected
//when prompts are answered-password is generated matching selected criteria
//when password is generated--displayed in alert or written to page


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = prompt("How many characters is your password? (Between 8 & 128)"); {
      if (length < 8 || length >128) {
        Alert('Incorrect: Please choose a number between 8 and 128');
        writePassword();
    } else {
        confirm ('Did you choose ' + length + ' characters?')
  }
}
//Prompts that ask about numbers, symbols, uppercase, and lower letters

  var confirmNumber = confirm("Do you want to use numbers?"); {
      };
  var confirmSymbols = confirm("Do you want to use symbols?"); {
      };
  var confirmUppercase = confirm("Do you want to have uppercase letters?"); {
      };
  var confirmLowercase = confirm("Do you want to have lowercase letters?"); {
      };

//Generate password function
  function randomString(length, chars) {
        var mask = result;
        if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (chars.indexOf('#') > -1) mask += '0123456789';
        if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        var result = '';
        for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
        return result;
    }
//output scenarios for generate password
  if (confirmNumber && confirmSymbols && confirmLowercase && confirmUppercase === true) {
  document.getElementById('password').innerHTML =(randomString(length, 'Aa!#'));
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase === true) {
    document.getElementById('password').innerHTML =(randomString(length, '#aA'));
  }
  else if (confirmNumber && confirmSymbols && confirmUppercase === true) {
    document.getElementById('password').innerHTML =(randomString(length, '#A!'));
  }
  else if (confirmNumber && confirmSymbols && confirmLowercase === true) {
    document.getElementById('password').innerHTML =(randomString(length, 'a#!'));
  }
  else if (confirmUppercase && confirmLowercase === true) {
      document.getElementById('password').innerHTML =(randomString(length, 'aA'));
    }
  else if (confirmUppercase && confirmNumber === true) {
      document.getElementById('password').innerHTML =(randomString(length, '#A'));
    }
  else if (confirmUppercase && confirmSymbols === true) {
      document.getElementById('password').innerHTML =(randomString(length, 'A!'));
    }
  else if (confirmNumber && confirmLowercase === true) {
      document.getElementById('password').innerHTML =(randomString(length, '#a'));
    }
  else if (confirmSymbols && confirmLowercase === true) {
      document.getElementById('password').innerHTML =(randomString(length, 'a!'));
    }
  else if (confirmSymbols && confirmNumber === true) {
      document.getElementById('password').innerHTML =(randomString(length, '#!'));
  }
  else if (confirmSymbols === true) {
    document.getElementById('password').innerHTML= (randomString(length, '!'));
    }
  else if (confirmNumber === true) {
    document.getElementById('password').innerHTML =(randomString(length, '#'));
  }
  else if (confirmLowercase === true) {
    document.getElementById('password').innerHTML =(randomString(length, 'a'));
  }  
  else if (confirmUppercase === true) {
    document.getElementById('password').innerHTML =(randomString(length, 'A'));
}
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
};

function generatePassword(){
};
