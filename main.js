
//Stored all the characters in an array.
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12 // this is how long I want the password to be.

// grabbed what I want to manipulate from the DOM
let passwordOne = document.getElementById("password-one") 
let passwordTwo = document.getElementById("password-two")


//function the grab a random character from the characters array. The function returns a character based on the code written for randomChar. 
function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

//function the generate a random password. So basically, based on the previous function written getRandomCharacter() except it fills up the empty variable randomPassword with a character, I want it to loop so it does so twelve times. This means that it grabs a character and then goes back to the code block to do the exact same thing again. 
function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }

    // the function then returns randomPassowrd which should now have twelve random characters. 
     return randomPassword
}

// const generatedPasswordOne = generateRandomPassword()


//this function manipulates the DOM so the random passwords are displayed on the client side. 
function generateRandomPasswords() {
passwordOne.textContent = generateRandomPassword()
passwordTwo.textContent = generateRandomPassword()
}

