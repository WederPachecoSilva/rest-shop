"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const orders_1 = require("./api/routes/orders");
const products_1 = require("./api/routes/products");
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
    return 0;
});
app.use("/products", products_1.productsRouter);
app.use("/orders", orders_1.ordersRouter);
mongoose.connect("mongodb://localhost:27017/node-rest", {
    useMongoClient: true
});
app.use((req, res, next) => {
    const error = new Error("Not found");
    const errorHandler = Object.assign({}, error, { status: 404 });
    next(errorHandler);
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