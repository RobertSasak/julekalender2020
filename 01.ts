import * as fs from 'fs'

const N = 100000
const input = fs
  .readFileSync('01.txt')
  .toString()
  .split(',')
  .map((n) => +n)

// Brute force approach
// Time complexity O(n)
// Space complexity O(n)
const h = {}
input.forEach((n) => (h[n] = true))
for (let i = 1; i <= N; i++) {
  if (!h[i]) {
    console.log(i)
  }
}

// Save space approach
// Compute sum of all input numbers and subtract it from sum from 1 to N
// Time complexity O(n)
// Space complexity O(1)
const sum = input.reduce((acc, n) => acc + n)
const result = ((1 + N) * N) / 2 - sum
console.log(result)
