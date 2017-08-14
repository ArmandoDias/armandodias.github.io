class FactorialClass {

  calc(n) {
    if (typeof n !== 'number') {
      return '[ Invalid Parameter ]'
    }
    return this.factorial(n)
  }

  factorial(n) {
    if (n === 0) {
      return 1
    }
    return n * this.factorial(n - 1)
  }

}
