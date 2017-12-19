"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongoose = require("mongoose");
const product_1 = require("../models/product");
exports.productsRouter = express_1.Router();
exports.productsRouter
    .route("/")
    .get((req, res) => {
    res.json({ message: "get products" });
})
    .post((req, res) => {
    const { name, price } = req.body;
    const product = new product_1.default({
        _id: new mongoose.Types.ObjectId(),
        name,
        price
    });
    product
        .save()
        .then(response => res.send(response))
        .catch(err => console.log(err));
    res.status(201).json({
        createdProduct: product,
        message: "Handling PORT requests to /products"
    });
});
exports.productsRouter
    .route("/:id")
    .get((req, res) => {
    res.json({ message: "get products/:id" });
})
    .patch((req, res) => {
    res.json({ message: "patch products/:id" });
})
    .delete((req, res) => {
    res.json({ message: "delete products/:id" });
});
//# sourceMappingURL=products.js.map