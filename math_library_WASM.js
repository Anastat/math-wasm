const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

const path = 'output.wasm'; // Relative path to your WebAssembly file

async function loadWebAssembly() {
    try {
        const buffer = await readFileAsync(path); // Read the WebAssembly file
        const module = await WebAssembly.instantiate(buffer, {}); // Instantiate the WebAssembly module

        // Get the exports (functions) from the WebAssembly instance
        const { fibonacci, factorial, approximatePi } = module.instance.exports;

        const n1 = 5;
        const n2 = 100;
        const result1 = fibonacci(n1);
        const result2 = factorial(n1);
        const result3 = approximatePi(n2);

        console.log(`Fibonacci number at position ${n1}: ${result1}`);
        console.log(`Factorial of ${n1}: ${result2}`);
        console.log(`Pi approximation after ${n2} iterations: ${result3}`);
    } catch (error) {
        console.error('Error loading WebAssembly module:', error);
    }
}

loadWebAssembly();

