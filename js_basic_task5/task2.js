function squareArray(arr) {
    let squaredArray = [];
    for (let i = 0; i < arr.length; i++) {
        squaredArray.push(arr[i] * arr[i]);
    }
    return squaredArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log("Масив чисел піднесений до квадрата:", squareArray(numbers));