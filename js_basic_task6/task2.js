function divider(divisor) {
    return function(dividend) {
        return dividend / divisor;
    };
}

const divideByFive = divider(5);
console.log(divideByFive(10));