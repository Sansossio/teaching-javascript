module.exports = {
  random (max = 100, min = 0) {
    return Math.random() * (max + 1) + min
  }
}
