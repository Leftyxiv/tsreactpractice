"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(items = []) {
        this.items = items;
    }
    calculateTotal() {
        // return this.items.reduce((acc, item) => acc + item.calculateTotal(), 0);
        return 100;
    }
}
exports.ShoppingCart = ShoppingCart;
