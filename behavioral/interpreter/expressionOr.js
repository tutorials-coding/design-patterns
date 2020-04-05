const Expression = require('./expression')

class ExpressionOr extends Expression {
  constructor(expr1, expr2) {
    super()
    if (!(expr1 instanceof Expression) || !(expr2 instanceof Expression)) {
      throw new Error('In argument given incorrect type')
    }
    this._expr1 = expr1
    this._expr2 = expr2
  }

  interpret(context) {
    return this._expr1.interpret(context) || this._expr2.interpret(context)
  }
}

module.exports = ExpressionOr
