let baseString = "random user text";
let charToReplace = "e";
let replacedString2 = baseString.replace(/[e]/gi, '*');

let replacedString = replaceCharacter(baseString, charToReplace);

console.log("Base string:", baseString);
console.log("Char to replace:", charToReplace);
console.log("String after replace:", replacedString);
console.log("Другий варіант: ", replacedString2);

function replaceCharacter(inputString, charToReplace) {
    let newString = "";

    for (let i = 0; i < inputString.length; i++) {
        let currentChar = inputString[i];

        if (currentChar === charToReplace) {
            newString += '*';
        } else {
            newString += currentChar;
        }
    }

    return newString;
}