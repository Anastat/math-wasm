const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

const path = 'output.wasm'; // Relative path to your WebAssembly file

async function loadWebAssembly() {
    try {
        const buffer = await readFileAsync(path); // Read the WebAssembly file
        const module = await WebAssembly.instantiate(buffer, {}); // Instantiate the WebAssembly module

        // Get the exports (functions) from the WebAssembly instance
        const { fibonacci, factorial, approximatePi, isPrime, ackermann, zetaFunction } = module.instance.exports;

        const inputs = [
            {i1: 30}, // fibonacci
            {i1: 20}, // factorial
            {i1: 1000}, // approximate pi
            {i1: 2147483647}, // is prime
            {i1: 3, i2: 6}, // ackermann
            {i1: 1.000001, i2:1000000}, // zeta
        ];
        const functions = [fibonacci, factorial, approximatePi, isPrime, ackermann, zetaFunction];
        functions.forEach((fn, index) => {
        const startTime = performance.now();
        const result = inputs[index].i2 ? fn(inputs[index].i1, inputs[index].i2) : fn(inputs[index].i1);
        console.log('output: ', result);
        console.log('time: ', performance.now() - startTime);
        console.log('_________________________________');
        });
    } catch (error) {
        console.error('Error loading WebAssembly module:', error);
    }
}

loadWebAssembly();
