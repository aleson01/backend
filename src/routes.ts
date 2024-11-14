import express, {  Request, Response } from 'express';
import multer from 'multer';

import CreateUserController from './controllers/user/CreateUserController';
import ListUserController from './controllers/user/ListaUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailuserController } from './controllers/user/DetailUserController';
import {isAuthenticated} from './middlewares/isAuthenticated'
import {CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import uploadConfig from './config/multer';


const router = express.Router();

const upload = multer(uploadConfig.upload("./tmp"))

router.post('/usuario', async(req:Request, res:Response)=>{ return new CreateUserController().handle(req, res); });
router.get('/usuario', async(req:Request, res:Response)=>{ return new ListUserController().handle(req, res); });
router.post('/session', async(req:Request, res:Response)=>{ return new AuthUserController().handle(req, res); });
router.get('/me', isAuthenticated, async(req:Request, res:Response)=>{ return new DetailuserController().handle(req, res); });
router.post('/category', isAuthenticated, async(req:Request, res:Response)=>{ return new CreateCategoryController().handle(req, res); });
router.get('/category', isAuthenticated, new ListCategoryController().handle);
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
export default router;