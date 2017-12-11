import { Router, Response, Request } from 'express';

export const productsRouter = Router();
productsRouter
    .route('/')
    .get((req: Request, res: Response) => {
        res.json({ message: 'get products' });
    })
    .post((req: Request, res: Response) => {
        const product = {
            name: req.body.name,
            price: req.body.price
        };
        res.status(201).json({
            message: 'Handling PORT requests to /products',
            createdProduct: product
        });
    });

productsRouter
    .route('/:id')
    .get((req: Request, res: Response) => {
        const { id } = req.params;
        res.json({ message: 'get products/:id' });
    })
    .patch((req: Request, res: Response) => {
        const { id } = req.params;
        res.json({ message: 'patch products/:id' });
    })
    .delete((req: Request, res: Response) => {
        const { id } = req.params;
        res.json({ message: 'delete products/:id' });
    });
