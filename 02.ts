const contains = (number: number, what: string) =>
  number.toString().indexOf(what) !== -1

const contains7 = (number: number) => contains(number, '7')

const isPrime = (number: number) => {
  if (number == 1) {
    return false
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false
  }
  return true
}

const solve = (N: number) => {
  let s = 0
  for (let i = 0; i < N; i++) {
    if (contains7(i)) {
      let skip = i
      for (let j = i; j > 0; j--) {
        if (isPrime(j)) {
          skip = j
          break
        }
      }
      i += skip
    } else {
      s++
    }
  }
  return s
}

// for (let i = 1; i < 40; i++) {
//   console.log(`Is ${i} prime? ${isPrime(i)}`)
// }

console.log(`${solve(10)} should be 7`)
console.log(`${solve(20)} should be 9`)
console.log(`${solve(10000)} should be 32`)
console.log(`For 5433000 is ${solve(5433000)}`)
