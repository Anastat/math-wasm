// Function to calculate the determinant of a 2x2 matrix
const determinant2x2 = (mat) => {
  return mat[0][0] * mat[1][1] - mat[0][1] * mat[1][0]
}

// Helper function to calculate the determinant of a matrix
const determinant = (matrix) => {
  const n = matrix.length
  if (n !== matrix[0].length) {
    throw new Error("Matrix must be square for determinant calculation.")
  }

  if (n === 1) {
    return matrix[0][0]
  }

  if (n === 2) {
    return determinant2x2(matrix)
  }

  let det = 0
  for (let j = 0; j < n; j++) {
    det += matrix[0][j] * cofactor(matrix, 0, j)
  }

  return det
}

// Helper function to calculate the cofactor of a matrix for a given element
const cofactor = (matrix, row, col) => {
  const n = matrix.length
  const minor = []
  for (let i = 0; i < n; i++) {
    if (i !== row) {
      minor.push([])
      for (let j = 0; j < n; j++) {
        if (j !== col) {
          minor[minor.length - 1].push(matrix[i][j])
        }
      }
    }
  }

  return ((row + col) % 2 === 0 ? 1 : -1) * determinant(minor)
}

// Calculates the transpose of a matrix
export const transpose = (matrix) => {
  const n = matrix.length
  const transposedMatrix = []
  for (let i = 0; i < n; i++) {
    transposedMatrix[i] = []
    for (let j = 0; j < n; j++) {
      transposedMatrix[i][j] = matrix[j][i]
    }
  }
  return transposedMatrix
}

// Calculates the adjoint of a matrix
export const adjoint = (matrix) => {
  const n = matrix.length
  const adjMatrix = []
  for (let i = 0; i < n; i++) {
    adjMatrix[i] = []
    for (let j = 0; j < n; j++) {
      adjMatrix[i][j] = cofactor(matrix, i, j)
    }
  }
  return transpose(adjMatrix)
}

// Calculates the inverse of a matrix
export const inverse = (matrix) => {
  const det = determinant(matrix)
  if (det === 0) {
    throw new Error("Matrix does not have an inverse.")
  }

  const adjMatrix = adjoint(matrix)
  const n = matrix.length
  const inverseMatrix = []
  for (let i = 0; i < n; i++) {
    inverseMatrix[i] = []
    for (let j = 0; j < n; j++) {
      inverseMatrix[i][j] = adjMatrix[i][j] / det
    }
  }

  return inverseMatrix
}
