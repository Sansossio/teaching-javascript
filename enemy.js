const { random } = require("./utils")

module.exports = class Enemy {
  life = 150
  evasion = 10
  defense = 35

  constructor (life, evasion, defense) {
    this.life = life
    this.evasion = evasion
    this.defense = defense
  }

  canHit () {
    return random() > this.evasion
  }

  calculateDamage (damage) {
    const result = damage - this.defense
    return result < 0 ? 0 : result
  }

  hit (damage) {
    if (this.canHit()) {
      const calculatedDamage = this.calculateDamage(damage)
      this.life -= calculatedDamage
      return calculatedDamage
    }
    return 0
  }
}