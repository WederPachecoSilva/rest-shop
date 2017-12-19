import { Request, Response, Router } from "express";

export const productsRouter = Router();
productsRouter
  .route("/")
  .get((req: Request, res: Response) => {
    res.json({ message: "get products" });
  })
  .post((req: Request, res: Response) => {
    const { name, price } = req.body;
    const product = {
      name,
      price
    };
    res.status(201).json({
      createdProduct: product,
      message: "Handling PORT requests to /products"
    });
  });

productsRouter
  .route("/:id")
  .get((req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: "get products/:id" });
  })
  .patch((req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: "patch products/:id" });
  })
  .delete((req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: "delete products/:id" });
  });
