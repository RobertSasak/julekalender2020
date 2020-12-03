import * as fs from 'fs'

const A = fs
  .readFileSync('03.txt')
  .toString()
  .split('\n')
  .map((row) => row.split(''))

const words = fs.readFileSync('03wordlist.txt').toString().split('\n')

const d = [
  { x: -1, y: 1 },
  { x: 1, y: 0 },
  { x: 0, y: -1 },
  { x: 0, y: 1 },
  { x: -1, y: -1 },
  { x: -1, y: 1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
]
const dc = [-1, 1, 0, 0, -1, -1, 1, 1]
const dr = [0, 0, -1, 1, -1, 1, -1, 1]

const startsHere = (
  A: string[][],
  word: string,
  row: number,
  col: number,
  R: number,
  C: number
): boolean => {
  for (let i = 0; i < dc.length; i++) {
    let found = true
    for (let j = 1; j < word.length; j++) {
      const r = row + dr[i] * j
      const c = col + dc[i] * j
      if (c >= 0 && c < C && r >= 0 && r < R) {
        if (A[r][c] !== word[j]) {
          found = false
          break
        }
      } else {
        found = false
        break
      }
    }
    if (found) {
      return true
    }
  }
  return false
}

const solve = (A: string[][], words: string[]): string[] => {
  const R = A.length
  if (R == 0) {
    return []
  }
  const C = A[0].length

  return words.filter((w) => {
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (startsHere(A, w, i, j, R, C)) {
          return true
        }
      }
    }
    return false
  })
}

const found = solve(A, words)
console.log(`Found these ${found.length} words:`)
console.log(found)

const missing = words.filter((w) => !found.includes(w))
console.log(`Missing words are ${missing.join(',')}`)
