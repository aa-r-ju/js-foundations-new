/* eslint-disable no-unused-vars */
class VM {
  constructor(inventory) {
    this.inventory = inventory;
  }

  sale(itemID) {
    const item = this.inventory[itemID];

    if (item && item.stock > 0) {
      item.stock -= 1;
      return `1 ${item.name} - Thank you and come again!`;
    }
  }

  stockTotal() {
    const total = Object.values(this.inventory).reduce(
      (sum, item) => sum + item.stock,
      0
    );

    return total === 0 ? "Out of Stock" : `${total} item(s)`;
  }
}

let kk = new VM({
  1: { name: "Sunny Delight", stock: 5 },
  2: { name: "Diet Soda", stock: 3 },
  3: { name: "Bottled Water", stock: 4 },
});
console.log(kk.sale(3));
console.log(kk.stockTotal());
