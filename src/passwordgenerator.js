//time to crack password
const calculateTimeToCrack = function(password) {
    // Get the number of possible characters for the password
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";
    const characterCount = characters.length;

    // Get the number of possible combinations for the password
    let combinationCount = Math.pow(characterCount, password.length);
    console.log(combinationCount)
    // Calculate the time to crack the password in seconds
    let timeTC = (combinationCount / 1000000000);

    let timeTCSec = (timeTC % 60);
    timeTC = (timeTC - timeTCSec) / 60;

    let timeTCMin = (timeTC % 60);
    timeTC = (timeTC - timeTCMin) / 60;

    let timeTCHour = (timeTC % 24);
    timeTC = (timeTC - timeTCHour) / 60;

    let timeTCDay = (timeTC / 24);

    console.log("Day: " + timeTCDay + " Hour: " + timeTCHour + " Minute: " + timeTCMin + " Second: " + timeTCSec);

    // Return the time to crack in minutes
    let toString = ("Day: " + timeTCDay + " Hour: " + timeTCHour + " Minute: " + timeTCMin + " Second: " + timeTCSec);

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

function generatePassword(slider_value, numbersincluded, specialcharincluded) {
    const lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
    const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const digits = "0123456789".split("");
    const symbols = "!@#$%&*?".split("");

    if (numbersincluded == true && specialcharincluded == true) {
        let strengthLabel = document.getElementById("strengthLabel")
        let text;
        switch (slider_value) {
            case '0':
                text = '8 characters'
                break;
            case '1':
                text = '16 characters'
                break;
            case '2':
                text = '32 characters'
                break;
            case '3':
                text = '64 characters'
                break;
        }
        document.getElementById("strengthLabel").textContent = text


        slider_value = parseInt(slider_value)
        var x = Math.pow(2, slider_value + 3);
        console.log('slider_value: ' + '2^' + (slider_value + 3) + ' = ' + slider_value)
        console.log('password length: ' + x)
        let timeTo = 'Time to crack: ' + toString
        document.getElementById("strengthLabel").textContent = timeTo

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
        document.getElementById("myTextbox").value = password;
    } else if (numbersincluded == true && specialcharincluded == false) {
        let strengthLabel = document.getElementById("strengthLabel")
        let text;
        switch (slider_value) {
            case '0':
                text = 'Medium'
                break;
            case '1':
                text = 'Strong'
                break;
            case '2':
                text = 'Really strong'
                break;
            case '3':
                text = 'Really really strong'
                break;
        }
        document.getElementById("strengthLabel").textContent = text

        slider_value = parseInt(slider_value)
        var x = Math.pow(2, slider_value + 3);
        console.log('slider_value: ' + '2^' + (slider_value + 3) + ' = ' + slider_value)
        console.log('password length: ' + x)

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
        console.log("Your password is: " + password);
        document.getElementById("myTextbox").value = password;
    }

    slider_value = parseInt(slider_value)
    var x = Math.pow(2, slider_value + 3);
    console.log('slider_value: ' + '2^' + (slider_value + 3) + ' = ' + slider_value)
    console.log('password length: ' + x)

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
    console.log("Your password is: " + password);
    document.getElementById("myTextbox").value = password;
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


//pass word strength
// function passwordstrength(userinput){
//     const zxcvbn = require('zxcvbn');
//
//     let password = userinput;
//
//     let strength = zxcvbn(password).score;
//
//     console.log(strength);
//
//     return strength;
// }


// function updateContent1() {
//     var inputValue = document.getElementById("myTextbox").value;
//     console.log(inputValue);
//     pwstrength = passwordstrength(userinput);
//     console.log(pwstrength);
//     document.getElementById("result").innerHTML = pwstrength;
// }

// const form = document.getElementById("login-form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;
//     // Send login request to server
//     // ...
// });
