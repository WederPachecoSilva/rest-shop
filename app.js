const express = require("express");
const morgan = require("morgan");

const productsRouter = require("./api/routes/products");
const ordersRouter = require("./api/routes/orders");

const app = express();

// Remenber to delete this middleware in production
app.use(morgan("dev"));

app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

app.use((req, res, next) => {
   const error = new Error("Not found");
   // @ts-ignore
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

module.exports = app;
