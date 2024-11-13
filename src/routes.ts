import express, {  Request, Response } from 'express';
import CreateUserController from './controllers/user/CreateUserController';
import ListUserController from './controllers/user/ListaUserController';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = express.Router();

router.post('/usuario', async(req:Request, res:Response)=>{ return new CreateUserController(). handle(req, res); });
router.get('/usuario', async(req:Request, res:Response)=>{ return new ListUserController(). handle(req, res); });
router.post('/session', async(req:Request, res:Response)=>{ return new AuthUserController().handle(req, res); });

export default router;