import { printTextWithDelay } from './task1.js';

function invokeCallbackWithDelay(text, seconds, callback) {
    setTimeout(function() {
        callback(text);
    }, seconds * 1000); 
}

invokeCallbackWithDelay("Hello, world!", 3, printTextWithDelay);
