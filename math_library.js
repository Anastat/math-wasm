const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
};
const fibonacci = (n) => {
    var sequence = [0, 1];
    for (var i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence[sequence.length - 1];
};
const approximatePi = (iterations) => {
    let piApproximation = 0;
    for (let i = 0; i < iterations; i++) {
        piApproximation += 4 * Math.pow(-1, i) / (2 * i + 1);
    }
    return piApproximation;
}