const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
};
const fibonacci = (n) => {
    var sequence = [1, 1];
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

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
}

function ackermann(m, n) {
    if (m === 0) {
      return n + 1;
    } else if (m > 0 && n === 0) {
      return ackermann(m - 1, 1);
    } else {
      return ackermann(m - 1, ackermann(m, n - 1));
    }
}

function zetaFunction(s, terms) {
    let result = 0;
    for (let n = 1; n <= terms; n++) {
      result += 1 / Math.pow(n, s);
    }
    return result;
}


const inputs = [
  {i1: 30}, // fibonacci
  {i1: 20}, // factorial
  {i1: 1000}, // approximate pi
  {i1: 2147483647}, // is prime
  {i1: 3, i2: 5}, // ackermann
  {i1: 1.000001, i2:1000000}, // zeta
];

const functions = [fibonacci, factorial, approximatePi, isPrime, ackermann, zetaFunction];

functions.forEach((fn, index) => {
  const startTime = performance.now();
  const result = inputs[index].i2 ? fn(inputs[index].i1, inputs[index].i2) : fn(inputs[index].i1);
  console.log('output: ', result);
  console.log('time: ', performance.now() - startTime);
  console.log('_________________________________');
})
