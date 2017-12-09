"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const products_1 = require("./api/routes/products");
const orders_1 = require("./api/routes/orders");
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/products", products_1.default);
app.use("/orders", orders_1.default);
app.use((req, res, next) => {
    let error;
    error = new Error("Not found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map