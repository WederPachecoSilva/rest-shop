import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";

import productsRouter from "./api/routes/products";
import ordersRouter from "./api/routes/orders";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

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

export default app;
