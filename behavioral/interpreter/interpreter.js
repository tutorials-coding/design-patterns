const ExpressionOr = require('./expressionOr')
const ExpressionAnd = require('./expressionAnd')
const ExpressionTerminal = require('./expressionTerminal')

class Application {
  // Rule: Cats and Dogs are home pets
  _getHomePetExpression() {
    const cats = new ExpressionTerminal('Cats')
    const dogs = new ExpressionTerminal('Dogs')
    return new ExpressionOr(cats, dogs)
  }

  // Rule: Cats like milk
  _getCatsLikeExpression() {
    const cats = new ExpressionTerminal('Cats')
    const milk = new ExpressionTerminal('Milk')
    return new ExpressionAnd(cats, milk)
  }

  run() {
    const isHomePet = this._getHomePetExpression()
    const likesMilk = this._getCatsLikeExpression()

    console.log(`Are Dogs home pets? ${isHomePet.interpret('Dogs')}`) // true
    console.log(`Are Cats like milk? ${likesMilk.interpret('Cats Milk')}`) // true
    console.log(`Are Dogs like milk? ${likesMilk.interpret('Digs Milk')}`) // false
  }
}

module.exports = {
  Application
}
