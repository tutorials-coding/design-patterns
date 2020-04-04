const Expression = require('./expression')

class ExpressionTerminal extends Expression {
  constructor(data) {
    super()
    this._data = data
  }
  interpret(context) {
    return context.includes(this._data)
  }
}

module.exports = ExpressionTerminal
