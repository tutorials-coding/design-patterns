const { rangeGen, getIterator } = require('./iterator')

// example with iterator
const array = [5, 6]
const iter1 = getIterator(array)[Symbol.iterator]()
console.log(iter1.next()) // { value: 5, done: false }
console.log(iter1.next()) // { value: 6, done: false }
console.log(iter1.next()) // { value: undefined, done: true }
console.log(iter1.next()) // { value: undefined, done: true }

const iter2 = getIterator(array)
for (let item of iter2) {
  console.log(item)
}
// 5
// 6

// example with generator
const gen1 = rangeGen(5, 7)
console.log(gen1.next()) // { value: 5, done: false }
console.log(gen1.next()) // { value: 6, done: false }
console.log(gen1.next()) // { value: undefined, done: true }
console.log(gen1.next()) // { value: undefined, done: true }

const gen2 = rangeGen(5, 7)
for (let item of gen2) {
  console.log(item)
}
// 5
// 6
