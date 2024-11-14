import express, {  Request, Response } from 'express';
import { isAuthenticated } from './middlewares/isAuthenticated'
import multer from 'multer';
import uploadConfig from './config/multer';

import CreateUserController from './controllers/user/CreateUserController';
import ListUserController from './controllers/user/ListaUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailuserController } from './controllers/user/DetailUserController';
import {CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';

import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrdersController } from './controllers/order/ListOrdersController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';


const router = express.Router();

const upload = multer(uploadConfig.upload("./tmp"))

router.post('/usuario', async(req:Request, res:Response)=>{ return new CreateUserController().handle(req, res); });
router.get('/usuario', async(req:Request, res:Response)=>{ return new ListUserController().handle(req, res); });
router.post('/session', async(req:Request, res:Response)=>{ return new AuthUserController().handle(req, res); });
router.get('/me', isAuthenticated, async(req:Request, res:Response)=>{ return new DetailuserController().handle(req, res); });
router.post('/category', isAuthenticated, async(req:Request, res:Response)=>{ return new CreateCategoryController().handle(req, res); });
router.get('/category', isAuthenticated, new ListCategoryController().handle);
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);


//-- ROTAS ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle )
router.delete('/order', isAuthenticated, new RemoveOrderController().handle )

router.post('/order/add', isAuthenticated, new AddItemController().handle )
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle )

router.put('/order/send', isAuthenticated, new SendOrderController().handle )

router.get('/orders', isAuthenticated, new ListOrdersController().handle )
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle )

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle )

export default router;