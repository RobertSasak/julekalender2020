import * as fs from 'fs'
import { fileURLToPath } from 'url'

const run = (file: string, elfs: number): number => {
  const list = fs
    .readFileSync(file)
    .toString()
    .split(',')
    .map((a) => +a)

  let sum = list.reduce((s, p) => s + p)
  for (let i = list.length - 1; i >= 0; i--) {
    if (sum % elfs === 0) {
      return sum / elfs
    }
    sum -= list[i]
  }
  return 0
}

console.log(`Small: ${run('06small.txt', 9)}`)
console.log(`Big: ${run('06.txt', 127)}`)
