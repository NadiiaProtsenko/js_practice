function calculate(num1, num2, operator) {
    try {
        
        if (arguments.length !== 3) {
            throw new Error('The number of arguments must be equal to 3');
        }
        
        
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('The first and second parameters must be numbers');
        }

        
        if (typeof operator !== 'string' || !['+', '-', '*', '/'].includes(operator)) {
            throw new Error('The third parameter must be +, -, *, or /');
        }

        
        if (operator === '/' && num2 === 0) {
            throw new Error('When dividing, the second parameter cannot be 0');
        }

        let result;

        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            result = num1 / num2;
        }

        
        console.log(`${num1} ${operator} ${num2} = ${result}`);
    } catch (error) {
    
        console.error(`Error: ${error.message}`);
    }
}

// Examples of using the calculate function
calculate(100, 5, "*"); // Output: 100 multiplied by 5 = 500
calculate(100, 5, "string"); // Output: Error: The third parameter must be +, -, *, or /
calculate(10, 0, "/"); // Output: Error: When dividing, the second parameter cannot be 0