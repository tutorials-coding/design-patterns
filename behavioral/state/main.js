const Car = require('./state')

// Case 1
const car1 = new Car()
car1.start()
car1.changeSpeed(5)
car1.stop()

// Case 2
const car2 = new Car()
car2.start()
car2.start() // throw an error
