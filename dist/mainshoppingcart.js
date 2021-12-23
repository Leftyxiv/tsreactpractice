"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculate_total_amount_1 = require("./calculate-total-amount");
const shopping_cart_1 = require("./shopping-cart");
const cart = new shopping_cart_1.ShoppingCart();
console.log(`This carts total is ${(0, calculate_total_amount_1.calculateTotalAmount)(cart)}`);
