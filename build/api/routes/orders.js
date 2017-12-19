"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.ordersRouter = express_1.Router();
exports.ordersRouter
    .route("/")
    .get((req, res) => {
    res.json({ message: "get orders" });
})
    .post((req, res) => {
    const { productId, quantity } = req.body;
    const order = {
        productId,
        quantity
    };
    res.status(201).json({
        message: "Order was created",
        order
    });
});
exports.ordersRouter
    .route("/:id")
    .get((req, res) => {
})
    .delete((req, res) => {
});
//# sourceMappingURL=orders.js.map