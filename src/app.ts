import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import { productsRouter } from './api/routes/products';
import { ordersRouter } from './api/routes/orders';
import { Response, NextFunction, Request } from 'express';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
    let error = new Error('Not found');
    let errorHandler = {
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
