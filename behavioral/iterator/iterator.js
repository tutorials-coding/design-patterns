function getIterator(array = []) {
  return {
    [Symbol.iterator]: function() {
      let i = 0
      return {
        next() {
          if (i < array.length) {
            return { value: array[i++], done: false }
          }
          return { value: undefined, done: true }
        }
      }
    }
  }
}

function* rangeGen(start = 0, end = +Infinity) {
  for (let i = start; i < end; i++) {
    yield i
  }
}

module.exports = {
  rangeGen,
  getIterator
}
