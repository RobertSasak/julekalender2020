import * as fs from 'fs'

const list = fs
  .readFileSync('04.txt')
  .toString()
  .replace(/\ /g, '')
  .split('\n')
  .map((row) =>
    row.split(',').map((i) => {
      const [ingredient, weight] = i.split(':')
      return {
        ingredient,
        weight: +weight,
      }
    })
  )

const sum: any = list
  .reduce((s, c) => [...s, ...c], [])
  .reduce((s, i) => {
    s[i.ingredient] = s[i.ingredient] ? s[i.ingredient] + i.weight : i.weight
    return s
  }, {})
// 2 enheter sukker
// 3 enheter mel
// 3 enheter melk
// 1 enhet egg

console.log(list)
console.log(sum)

const max = [sum.sukker / 2, sum.mel / 3, sum.melk / 3, sum.egg / 1].reduce(
  (m, c) => Math.min(m, c),
  Number.MAX_VALUE
)

console.log(Math.floor(max))
