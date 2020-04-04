const { Cat, Dog, visitSounds, visitSleep } = require('./visitor')

const cat = new Cat()
const dog = new Dog()

cat.accept(visitSounds) // meow-meow
dog.accept(visitSounds) // woof-woof

cat.accept(visitSleep) // sleeps on the sofa
dog.accept(visitSleep) // sleeps on the pillow
