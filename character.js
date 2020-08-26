const { random } = require("./utils")

const MAX_CRITIC = 3.0
const MIN_CRITIC = 1.5

module.exports = class Character {
  constructor (damage, critic) {
    this.damage = damage
    this.critic = critic
  }

  getDamage() {
    if (random() <= this.critic) {
      return this.damage * random(MAX_CRITIC, MIN_CRITIC)
    }
    return this.damage
  }
}
