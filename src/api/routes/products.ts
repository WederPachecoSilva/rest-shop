import { Router } from "express";

const router = Router();
router
    .route("/")
    .get((req, res) => {
        res.json({ message: "get products" });
    })
    .post((req, res) => {
        const product = {
            name: req.body.name,
            price: req.body.price
        };
        res.status(201).json({
            message: "Handling PORT requests to /products",
            createdProduct: product
        });
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

export default router;
