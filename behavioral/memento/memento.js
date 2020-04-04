// Хранитель
class Memento {
  constructor(state) {
    this._state = state
  }

  getState() {
    return this._state
  }
}

// Посыльный
class Caretaker {
  constructor() {
    this._memento = null
  }

  getMemento() {
    return this._memento
  }

  setMemento(memento) {
    if (memento instanceof Memento) {
      this._memento = memento
    }
  }
}

// Хозяин
class Originator {
  constructor() {
    this._state = null
  }

  setState(state) {
    this._state = state
  }

  getState() {
    return this._state
  }

  createMemento() {
    return new Memento(this._state)
  }

  setMemento(memento) {
    if (memento instanceof Memento) {
      this._state = memento.getState()
    }
  }
}

module.exports = {
  Originator,
  Caretaker,
}
