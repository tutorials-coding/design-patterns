const { Originator, Caretaker } = require('./memento')

const originator = new Originator()
const caretaker = new Caretaker()

originator.setState('0')
console.log(`State = ${originator.getState()}`) // State = 0
caretaker.setMemento(originator.createMemento())

originator.setState('1')
console.log(`State = ${originator.getState()}`) // State = 1

originator.setMemento(caretaker.getMemento())
console.log(`State = ${originator.getState()}`) // State = 0
