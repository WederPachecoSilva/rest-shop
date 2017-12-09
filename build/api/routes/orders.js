"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router
    .route("/")
    .get((req, res) => {
    res.json({ message: "get orders" });
})
    .post((req, res) => { });
router
    .route("/:id")
    .get((req, res) => {
    const { id } = req.params;
})
    .delete((req, res) => {
    const { id } = req.params;
});
exports.default = express_1.Router;
//# sourceMappingURL=orders.js.map