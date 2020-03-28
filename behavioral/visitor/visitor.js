class Cat {
  mew() {
    console.log('meow-meow')
  }

  accept(operation) {
    operation.visitCat(this)
  }
}

class Dog {
  bark() {
    console.log('woof-woof')
  }

  accept(operation) {
    operation.visitDog(this)
  }
}

const visitSounds = {
  visitCat(cat) {
    cat.mew()
  },
  visitDog(dog) {
    dog.bark()
  }
}

const visitSleep = {
  visitCat() {
    console.log('sleeps on the sofa')
  },
  visitDog() {
    console.log('sleeps on the pillow')
  }
}

module.exports = {
  Cat,
  Dog,
  visitSounds,
  visitSleep
}
