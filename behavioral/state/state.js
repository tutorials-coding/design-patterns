class CarStateStopped {
  constructor(car) {
    this._car = car
    console.log('Car is stopped')
  }

  start() {
    this._car._engineWorks = true
    this._car._speed = 0
    this._car._changeState(new CarStateStarted(this._car))
  }

  stop() {
    throw new Error('Car is stopped already')
  }

  changeSpeed() {
    throw new Error('Car is not driven')
  }
}

class CarStateStarted {
  constructor(car) {
    this._car = car
    console.log('Car is started')
  }

  start() {
    throw new Error('Car is already started')
  }

  stop() {
    this._car._speed = 0
    this._car._engineWorks = false
    this._car._changeState(new CarStateStopped(this._car))
  }

  changeSpeed(value) {
    console.log(`Setting speed to ${value}`)
    if (value >= 0) {
      this._car._speed = value
    } else {
      throw new Error("Speed value can't be negative")
    }
  }
}

class Car {
  constructor() {
    this._speed = 0
    this._engineWorks = false
    this._state = new CarStateStopped(this)
  }

  start() {
    this._state.start(this)
  }

  stop() {
    this._state.stop(this)
  }

  changeSpeed(value) {
    this._state.changeSpeed(value)
  }

  _changeState(newState) {
    this._state = newState
  }
}

module.exports = Car
