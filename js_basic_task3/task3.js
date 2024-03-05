let userInput = "random user text";
let replacedString = "";
let vowelCount = 0;


for(let i = 0; i < userInput.length; i++) {
    let currentChar = userInput[i];
    if (currentChar === 'a' || currentChar === 'o' || currentChar === 'u' || currentChar === 'e' || currentChar === 'i') {
        replacedString += '*';
        vowelCount++;
    } else {
        replacedString += userInput[i];
    }
}

console.log(replacedString);
console.log(vowelCount);