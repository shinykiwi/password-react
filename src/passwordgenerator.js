//time to crack password
const calculateTimeToCrack = function(password) {
    // Get the number of possible characters for the password
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";
    let characterCount = 0;

    // Get the number of possible combinations for the password
    const lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
    const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const digits = "0123456789".split("");
    const symbols = "!@#$%&*?".split("");
    let containsLowercase = lettersLower.some(char =>password.includes(char))
    let containsUppercase = lettersUpper.some(char =>password.includes(char))
    let containsDigits = digits.some(char =>password.includes(char))
    let containsSymbols = symbols.some(char =>password.includes(char))

    if (containsLowercase){
        characterCount+=26
    }
    if (containsUppercase){
        characterCount+=26
    }
    if (containsDigits){
        characterCount+=10
    }
    if (containsSymbols){
        characterCount+=8
    }

    let combinationCount = Math.pow(characterCount, password.length);
    console.log('comb count: ' + combinationCount)
    // Calculate the time to crack the password in seconds
    let timeTC = (combinationCount / 1000000000);

    let timeTCSec = Math.floor(timeTC % 60);
    timeTC = (timeTC - timeTCSec) / 60;

    let timeTCMin = Math.floor(timeTC % 60);
    timeTC = (timeTC - timeTCMin) / 60;

    let timeTCHour = Math.floor(timeTC % 24);
    timeTC = (timeTC - timeTCHour) / 60;

    let timeTCDay = Math.floor(timeTC % 24);
    timeTC = (timeTC - timeTCDay) / 24;

    let timeTCYear = Math.floor(timeTC / 365);

    console.log("Year: " + timeTCYear + " Day: " + timeTCDay + " Hour: " + timeTCHour + " Minute: " + timeTCMin + " Second: " + timeTCSec);

    // Return the time to crack in minutes
    let toString = (timeTCYear + " Yr, " + timeTCDay + " Day, " + timeTCHour + " Hr, " + timeTCMin + " Min, " + timeTCSec + " Sec");

    return toString;
}

export default calculateTimeToCrack;

// //password generator
// function updateContent() {
//     var inputValue = document.getElementById("myTextbox").value;
//     console.log(inputValue);
//     returnpassword = generatePassword(Number(inputValue));
//     console.log(returnpassword);
//     document.getElementById("result").innerHTML = returnpassword;
// }

function generatePassword(length, numbersincluded, specialcharincluded) {
    const lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
    const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const digits = "0123456789".split("");
    const symbols = "!@#$%&*?".split("");

    if (numbersincluded == true && specialcharincluded == true) {

        var x = length

        while (true) {
            var pick = Array.from({length: 4}, () => Math.floor(Math.random() * (x - 2) + 2));
            if (pick.reduce((a, b) => a + b) === x) break;
        }
        var result = pick;

        var numofletterlower = result[0];
        var numofletterupper = result[1];
        var numofsymbols = result[2];
        var numofdigits = result[3];

        var password = "";
        for (var i = 0; i < numofletterlower; i++) {
            password += lettersLower[Math.floor(Math.random() * lettersLower.length)];
        }
        for (var i = 0; i < numofletterupper; i++) {
            password += lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
        }
        for (var i = 0; i < numofsymbols; i++) {
            password += symbols[Math.floor(Math.random() * symbols.length)];
        }
        for (var i = 0; i < numofdigits; i++) {
            password += digits[Math.floor(Math.random() * digits.length)];
        }

        var password_list = password.split("");
        password_list = shuffle(password_list);
        password = password_list.join("");
        console.log("Your password is: " + password);

    } else if (numbersincluded == false && specialcharincluded == true) {

        var x = length

        while (true) {
            var pick = Array.from({length: 4}, () => Math.floor(Math.random() * (x - 2) + 2));
            if (pick.reduce((a, b) => a + b) === x) break;
        }
        var result = pick;

        var numofletterlower = result[0];
        var numofletterupper = result[1];
        var numofsymbols = result[2];

        var password = "";
        for (var i = 0; i < numofletterlower; i++) {
            password += lettersLower[Math.floor(Math.random() * lettersLower.length)];
        }
        for (var i = 0; i < numofletterupper; i++) {
            password += lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
        }
        for (var i = 0; i < numofsymbols; i++) {
            password += symbols[Math.floor(Math.random() * symbols.length)];
        }

        var password_list = password.split("");
        password_list = shuffle(password_list);
        password = password_list.join("");
        console.log("Your password is: " + password);

    } else if (numbersincluded == true && specialcharincluded == false) {
        var x = length

        while (true) {
            var pick = Array.from({length: 3}, () => Math.floor(Math.random() * (x - 2) + 2));
            if (pick.reduce((a, b) => a + b) === x) break;
        }
        var result = pick;

        var numofletterlower = result[0];
        var numofletterupper = result[1];
        var numofdigits = result[2];

        var password = "";
        for (var i = 0; i < numofletterlower; i++) {
            password += lettersLower[Math.floor(Math.random() * lettersLower.length)];
        }
        for (var i = 0; i < numofletterupper; i++) {
            password += lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
        }
        for (var i = 0; i < numofdigits; i++) {
            password += digits[Math.floor(Math.random() * digits.length)];
        }

        var password_list = password.split("");
        password_list = shuffle(password_list);
        password = password_list.join("");
    } else if (numbersincluded == false && specialcharincluded == false) {
        var x = length

        while (true) {
            var pick = Array.from({length: 2}, () => Math.floor(Math.random() * (x - 2) + 2));
            if (pick.reduce((a, b) => a + b) === x) break;
        }
        var result = pick;

        var numofletterlower = result[0];
        var numofletterupper = result[1];

        var password = "";
        for (var i = 0; i < numofletterlower; i++) {
            password += lettersLower[Math.floor(Math.random() * lettersLower.length)];
        }
        for (var i = 0; i < numofletterupper; i++) {
            password += lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
        }

        var password_list = password.split("");
        password_list = shuffle(password_list);
        password = password_list.join("");
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}
