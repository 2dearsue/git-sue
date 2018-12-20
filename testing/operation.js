const operation = (a, b) => {
  if (typeof a !== `number` || typeof b !== `number`) {
    return 'Sorry the operation is not possible!'
  } else if (a < 0) {
    return Math.abs(a) * b;
  }

  return a + b;
}

module.exports = operation;
