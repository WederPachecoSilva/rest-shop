import { Router, Request, Response } from 'express';

export const ordersRouter = Router();

ordersRouter
    .route('/')
    .get((req: Request, res: Response) => {
        res.json({ message: 'get orders' });
    })
    .post((req: Request, res: Response) => {
        const order = {
            productId: req.body.productId,
            quantity: req.body.quantity
        };
        res.status(201).json({
            message: 'Order was created',
            order
        });
    });

ordersRouter
    .route('/:id')
    .get((req: Request, res: Response) => {
        const { id } = req.params;
    })
    .delete((req, res) => {
        const { id } = req.params;
    });
