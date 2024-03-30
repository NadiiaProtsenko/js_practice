export function printTextWithDelay(text, seconds) {
    setTimeout(function () {
        console.log(text);
    }, seconds * 1000);
}

printTextWithDelay("My text", 5); 

//second variance
async function printTextWithDelay2(text, seconds) {
    await new Promise(resolve => setTimeout(resolve, seconds * 1000));
    console.log(text);
}

printTextWithDelay2("Hello, guys!", 5); 


