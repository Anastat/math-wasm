# math-wasm
This package was created for research purposes to measure the performance of WASM compared to JavaScript.
As a result, this library contains the following functions, written in C++ and used as WASM modules:

- fibonacci(x)
- factorial(x)
- approximatePi(x)
- isPrime(x)
- ackermann(x, y)
- zetaFunction(x, y)

Matrix functions are written in JavaScript because JS has shown better performance compared to WASM:
- adjoint(matrix)
- inverse(matrix)
- transpose(matrix)

The matrix input data must be a two-dimensional array of the following format:

const matrix = [
  [5, -2, 2, 7],
  [1, 0, 0, 3],
  [-3, 1, 5, 0],
  [3, -1, -9, 4],
]

Use command `npm i math-wasm` to install the package.

To use functions in your code: 
```
import {
  fibonacci,
  factorial,
  approximatePi,
  isPrime,
  ackermann,
  zetaFunction,
  inverse,
  adjoint,
  transpose
} from "math-wasm"
```
