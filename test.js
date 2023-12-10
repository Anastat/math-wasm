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
} from "./index.js"

const inputMatrix = [
  [872, 646, 171, 937, 383, 117],
  [212, 368, 224, 267, 426, 793],
  [938, 996, 304, 889, 874, 754],
  [983, 555, 112, 881, 13, 10],
  [560, 297, 26, 70, 488, 640],
  [695, 860, 224, 668, 715, 99],
]

const inputs = [
  { i1: 30 }, // fibonacci
  { i1: 20 }, // factorial
  { i1: 1000 }, // approximate pi
  { i1: 2147483647 }, // is prime
  { i1: 3, i2: 6 }, // ackermann
  { i1: 1.000001, i2: 1000000 }, // zeta
  {i1: inputMatrix}, // matrix inverse
  {i1: inputMatrix},  // matrix adjoint
  {i1: inputMatrix}  // matrix transpose
]
const functions = [
  fibonacci,
  factorial,
  approximatePi,
  isPrime,
  ackermann,
  zetaFunction,
  inverse,
  adjoint,
  transpose
]
functions.forEach((fn, index) => {
  const startTime = performance.now()
  const result = inputs[index].i2
    ? fn(inputs[index].i1, inputs[index].i2)
    : fn(inputs[index].i1)
  console.log("output: ", result)
  console.log("time: ", performance.now() - startTime)
  console.log("_________________________________")
})
