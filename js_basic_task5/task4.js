function calculatePerformance(math, literature, physics) {
    let average = (math + literature + physics) / 3;
    if (average >= 1 && average <= 49) {
        return "Low performance";
    } else if (average >= 50 && average <= 69) {
        return "Medium performance";
    } else if (average >= 70 && average <= 89) {
        return "Good performance";
    } else if (average >= 90 && average <= 100) {
        return "Very good performance";
    } else {
        return "Invalid input"; 
    }
}

console.log(calculatePerformance(80, 90, 95));