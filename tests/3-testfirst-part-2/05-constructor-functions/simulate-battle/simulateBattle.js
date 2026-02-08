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
