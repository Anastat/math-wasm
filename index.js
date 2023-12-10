import fs from "fs"

const buffer = fs.readFileSync("./src/output.wasm") // Read the WebAssembly file
const module = await WebAssembly.instantiate(buffer, {}) // Instantiate the WebAssembly module

// Matrix functions.
export * from "./src/matrix.js"

// Wraper functions for Wasm
export const fibonacci = (x) => {
  return module.instance.exports.fibonacci(x)
}
export const factorial = (x) => {
  return module.instance.exports.factorial(x)
}
export const approximatePi = (x) => {
  return module.instance.exports.approximatePi(x)
}
export const isPrime = (x) => {
  return module.instance.exports.isPrime(x)
}
export const ackermann = (x, y) => {
  return module.instance.exports.ackermann(x, y)
}
export const zetaFunction = (x, y) => {
  return module.instance.exports.zetaFunction(x, y)
}
