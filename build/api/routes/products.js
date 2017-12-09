"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router
    .route("/")
    .get((req, res) => {
    res.json({ message: "get products" });
})
    .post((req, res) => {
    const { product } = req.body;
    res.json({ message: "post products" });
});
router
    .route("/:id")
    .get((req, res) => {
    const { id } = req.params;
    res.json({ message: "get products/:id" });
})
    .patch((req, res) => {
    const { id } = req.params;
    res.json({ message: "patch products/:id" });
})
    .delete((req, res) => {
    const { id } = req.params;
    res.json({ message: "delete products/:id" });
});
exports.default = router;
//# sourceMappingURL=products.js.map