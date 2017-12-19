"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    price: Number
});
exports.default = mongoose.model("product", productSchema);
//# sourceMappingURL=order.js.map