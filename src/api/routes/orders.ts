import { Router } from "express";

const router = Router();

router
    .route("/")
    .get((req, res) => {
        res.json({ message: "get orders" });
    })
    .post((req, res) => {
        const order = {
            productId: req.body.productId,
            quantity: req.body.quantity
        };
        res.status(201).json({
            message: "Order was created",
            order
        });
    });

router
    .route("/:id")
    .get((req, res) => {
        const { id } = req.params;
    })
    .delete((req, res) => {
        const { id } = req.params;
    });

export default Router;
