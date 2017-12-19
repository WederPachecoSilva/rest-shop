import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";
import * as morgan from "morgan";

import { NextFunction, Request, Response } from "express";
import { ordersRouter } from "./api/routes/orders";
import { productsRouter } from "./api/routes/products";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
  return 0;
});

app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

mongoose.connect("mongodb://localhost:27017/node-rest", {
  useMongoClient: true
});

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Not found");
  const errorHandler = {
    ...error,
    status: 404
  };
  next(errorHandler);
});

type ErrorHandler = Error & { status: number };

app.use(
  (error: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).json({
      error: {
        message: error.message
      }
    });
  }
);

export default app;
