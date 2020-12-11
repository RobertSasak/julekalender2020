import * as fs from 'fs'

const isSymmetric = (A: string[][], f: number, t: number): boolean => {
  for (let i = 0; i < A.length; i++) {
    let b = false
    for (let j = f; j <= f + Math.ceil((t - f) / 2); j++) {
      b = b || A[i][j] === '#' || A[i][t - j + f] === '#'
      if (A[i][j] !== A[i][t - j + f]) {
        return false
      }
      if (b && A[i][j] === ' ') {
        return false
      }
    }
  }
  return true
}

const run = (file: string): number => {
  const A = fs
    .readFileSync(file)
    .toString()
    .split('\n')
    .map((a) => a.split(''))

  let sum = 0
  let prev = 0
  let empty = 0
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[j][i] !== ' ') {
        empty = 0
        break
      }
    }
    empty++
    if (empty === 2) {
      if (isSymmetric(A, prev, i - 1)) {
        sum++
      }
      prev = i + 2
      empty = 0
    }
  }
  if (isSymmetric(A, prev, A[0].length - 1)) {
    sum++
  }
  return sum
}

console.log(`Small: ${run('07small.txt')}`)
console.log(`Small: ${run('07small2.txt')}`)
console.log(`Big: ${run('07.txt')}`)
