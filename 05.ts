import * as fs from 'fs'

const steps = fs.readFileSync('05.txt').toString().split('')

const map = {
  H: { x: +1, y: +0 },
  V: { x: -1, y: +0 },
  O: { x: +0, y: +1 },
  N: { x: +0, y: -1 },
}

// https://en.wikipedia.org/wiki/Shoelace_formula
let x = 0
let y = 0
let a = 0
steps.forEach((d) => {
  a += x * (y + map[d].y)
  a -= y * (x + map[d].x)
  x += map[d].x
  y += map[d].y
})

a /= 2
console.log(a)
