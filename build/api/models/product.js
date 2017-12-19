"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true }
});
exports.default = mongoose.model("product", productSchema);
//# sourceMappingURL=product.js.map