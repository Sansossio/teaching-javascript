const Character = require("./character")
const Enemy = require("./enemy")

let hitsCount = 0
const hits = []

const character = new Character(
  50,    // damage
  15     // critic
)
const enemy = new Enemy(
  150,  // life
  10,   // evasion
  35    // defense
)

while (enemy.life > 0) {
  hitsCount++
  const damageDealt = enemy.hit(character.getDamage())
  hits.push(damageDealt)
}

const hitsDodge = Math.floor(hits.filter(damage => damage === 0).length / hitsCount * 100)

console.log(`hits needed to kill him: ${hitsCount} (dodged: ${hitsDodge}%) (${hits.join(',')})`)
