let userInput = "random user text";
let replacedString = "";
let replacedString2 = userInput.replace(/[aoue]/gi, '*');
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

console.log("Перший варіант: ",replacedString);
console.log("Другий варіант: ", replacedString2);
console.log("Кількість голосних, які були замінені на '*':", vowelCount);