function plus(a, b) {
  if (a == 0 && b == 0) {
    return -1
  }
  return a + b
}

function minus(a, b) {
  return a - b
}

module.exports = {
  plus,
  minus
}
