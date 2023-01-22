//time to crack password
export const calculateTimeToCrack = function (password) {
    // Get the number of possible characters for the password
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";
    let characterCount = 0;

    // Get the number of possible combinations for the password
    const lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
    const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const digits = "0123456789".split("");
    const symbols = "!@#$%&*?".split("");
    let containsLowercase = lettersLower.some(char => password.includes(char))
    let containsUppercase = lettersUpper.some(char => password.includes(char))
    let containsDigits = digits.some(char => password.includes(char))
    let containsSymbols = symbols.some(char => password.includes(char))

    if (containsLowercase) {
        characterCount += 26
    }
    if (containsUppercase) {
        characterCount += 26
    }
    if (containsDigits) {
        characterCount += 10
    }
    if (containsSymbols) {
        characterCount += 8
    }

    let combinationCount = Math.pow(characterCount, password.length)
    // Calculate the time to crack the password in seconds
    let total_time = (combinationCount / 2000000000);
    console.log('combinations: ' + combinationCount)

    let seconds = Math.floor(total_time % 60);
    total_time = (total_time - seconds) / 60;

    let minutes = Math.floor(total_time % 60);
    total_time = (total_time - minutes) / 60;

    let hours = Math.floor(total_time % 24);
    total_time = (total_time - hours) / 60;

    let days = Math.floor(total_time % 24);
    total_time = (total_time - days) / 24;

    let months = Math.floor(total_time % 30);
    total_time = (total_time - days) / 30;

    let years = Math.floor(total_time / 12);

    let date_string = '';

    if (years > 1000) {
        return Math.round(years/1000) * 1000 + " years"
    }
    const MAX_TIMESCALES = 3
    let current = 0
    let timescales = [[years, 'y'], [months, 'mo'], [days, 'd'], [hours, 'h'], [minutes, 'm'], [seconds, 's']]
    timescales.forEach(function(timescale) {
        if (timescale[0] > 0) {
            console.log('current', current)

            date_string += " " + timescale[0] + timescale[1]
            current++
            if (current >= MAX_TIMESCALES) {
                return date_string
            }
        }
    })
    if (date_string.length === 0)
        return "< 1 second"
    else
        return date_string
}

export const generatePassword = function (length, numbers, specialChar) {
    const lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
    const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const digits = "0123456789".split("");
    const symbols = "!@#$%&*?".split("");

    if (numbers === true && specialChar === true) {

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

        for (var i = 0; i < numofletterlower; i++)
            password += lettersLower[Math.floor(Math.random() * lettersLower.length)];
        for (var i = 0; i < numofletterupper; i++)
            password += lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
        for (var i = 0; i < numofsymbols; i++)
            password += symbols[Math.floor(Math.random() * symbols.length)];
        for (var i = 0; i < numofdigits; i++)
            password += digits[Math.floor(Math.random() * digits.length)];

        var password_list = password.split("");
        password_list = shuffle(password_list);
        password = password_list.join("");
        return password

    } else if (numbers === false && specialChar === true) {

        var x = length

        while (true) {
            var pick = Array.from({length: 3}, () => Math.floor(Math.random() * (x - 2) + 2));
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
        return password

    } else if (numbers == true && specialChar == false) {
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
        return password
    } else if (numbers === false && specialChar === false) {
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
        return password
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
