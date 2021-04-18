// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0
// var passwordText = document.querySelector("#password")

// document.getElementById("password").value = 'placeholder'
// passwordText.setAttribute()
// Write password to the #password input
function writePassword() {
  console.log(`TEST | writePassword HAS BEEN EXECUTED!`)
  var password = userDefinedParams();
  console.log(`TEST | userDefinedParams HAS BEEN EXECUTED`)
  var passwordText = document.querySelector("#password");



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function userDefinedParams() {
  console.log(`TEST | generatePassword HAS BEEN INITIATED`)

  var retry = true;
  while (retry) {
    console.log(`TEST | while LOOP HAS BEEN INITIATED`)
    passwordLength = window.prompt(`Welcome to the Password Generator\nEnter the desired length of the password (8 - 128 characters)`)
    console.log(`TEST | passwordLength ENTERED - ${passwordLength}`)
    while (passwordLength < 8 || passwordLength > 128) {
      console.log(`TEST | throw error for invalid number of characters`)
      window.alert(`Number of characters entered  (${passwordLength}) is invalid.  Please enter again`)
      passwordLength = window.prompt(`Welcome to the Password Generator\nEnter the desired length of the password (8 - 128 characters)`)
    }
    console.log(`TEST | NUMBER OF CHAR while LOOP SUCCESS!`)
    
    // Lowercase parameter validation
    var charSelectLc = window.prompt(`Include lowercase alphabetic characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
    console.log(`TEST | LENGTH OF charSelectLc:  ${charSelectLc.length}`)
    while (charSelectLc !== 'Y' && charSelectLc !== 'N') {
      console.log(`TEST | throw error for invalid character entry`)
      window.alert(`User entered ${charSelectLc} which is not a valid selection\nPlease enter selection again`)
      charSelectLc = window.prompt(`Include lowercase alphabetic characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
    }
    console.log(`TEST | CURRENT VALUE OF charSelectLc:  ${charSelectLc}`)
    console.log(`TEST | LOWERCASE ALPHABETIC CHAR while LOOP SUCCESS`)

    // Uppercase parameter validation
    charSelectUc = window.prompt(`Include uppercase alphabetic characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
    if (charSelectUc === "" || charSelectUc === null) {
      charSelectUc === 'N'
    } else {
      console.log(`TEST | uppercase - ${charSelectUc}`)
      while (charSelectUc !== 'Y' && charSelectUc !== 'N') {
        console.log(`TEST | throw error for invalid character entry`)
        window.alert(`User entered ${charSelectUc} which is not a valid selection\nPlease enter selection again`)
        charSelectUc = window.prompt(`Include uppercase alphabetic characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      }
    }
    console.log(`TEST | CURRENT VALUE OF charSelectLc:  ${charSelectLc}`)
    console.log(`TEST | UPPERCASE ALPHABETIC CHAR while LOOP SUCCESS`)

    // Numeric parameter validation
    charSelectNum = window.prompt(`Include numeric characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
    if (charSelectNum === "" || charSelectNum === null) {
      charSelectNum === 'N'
    } else {
      console.log(`TEST | numeric - ${charSelectNum}`)
      while (charSelectNum !== 'Y' && charSelectNum !== 'N') {
        console.log(`TEST | throw error for invalid character entry`)
        window.alert(`User entered ${charSelectNum} which is not a valid selection\nPlease enter selection again`)
        charSelectnum = window.prompt(`Include numeric characters?\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      }
    }
    console.log(`TEST | NUMERIC CHAR while LOOP SUCCESS`)

    // Special character parameter validation
    charSelectSpec = window.prompt(`Include special characters? (!"#$%&'()*+,-./:;<=>?@[^_ etc.)\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
    if (charSelectSpec === "" || charSelectSpec === null) {
      charSelectSpec === 'N'
    } else {
      console.log(`TEST | special - ${charSelectSpec}`)
      while (charSelectSpec !== 'Y' && charSelectSpec !== 'N') {
        console.log(`TEST | throw error for invalid character entry`)
        window.alert(`User entered ${charSelectSpec} which is not a valid selection\nPlease enter selection again`)
        charSelectnum = window.prompt(`Include special characters? (!"#$%&'()*+,-./:;<=>?@[^_ etc.)\nEnter "y" (for "Yes, include")\nEnter "n" (for "No, do not include")`).toUpperCase() || 'N'
      }
    }
    console.log(`TEST | SPECIAL CHAR while LOOP SUCCESS`)

    // FINAL RESULTS
    console.log(`TEST | LOWERCASE:  ${charSelectLc}`)
    console.log(`TEST | UPPERCASE:  ${charSelectUc}`)
    console.log(`TEST | NUMERIC:    ${charSelectNum}`)
    console.log(`TEST | SPECIAL:    ${charSelectSpec}`)

    retry = false
  }
}

function generatePassword() {

}