/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus) {
  (this.name = name), (this.health = health), (this.attackBonus = attackBonus);
}
Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};
Pokemon.prototype.isDefeated = function () {
  return this.health <= 0;
};

let human = new Pokemon("pikachu", 250, 4);
console.log(human.biteAttack());
console.log(human.isDefeated());

function simulateBattle(pokemon1, pokemon2, firstAttacker) {
  let attacker;
  let defender;

  if (pokemon1.name === firstAttacker) {
    attacker = pokemon1;
    defender = pokemon2;
  } else {
    attacker = pokemon2;
    defender = pokemon1;
  }

  for (let i = 0; i < 1000; i++) {
    defender.health -= attacker.biteAttack();
    if (defender.isDefeated()) {
      return `${attacker.name} Wins!`;
    }
    let temp = attacker;
    attacker = defender;
    defender = temp;
  }
}
