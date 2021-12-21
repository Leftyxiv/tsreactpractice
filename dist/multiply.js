"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyByTwo = exports.multiply = void 0;
const multiply = (a, b) => a * b;
exports.multiply = multiply;
const multiplyByTwo = (a) => (0, exports.multiply)(a, 2);
exports.multiplyByTwo = multiplyByTwo;
