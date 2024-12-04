<<<<<<< HEAD
import {Request, Response } from 'express'
=======
import e, { Request, Response} from "express";
>>>>>>> d8b25ea9123ecc72532bb25dd0b71aab83436d23
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController{
    async handle(req:Request, res:Response){
        const createUserService = new CreateUserService();
<<<<<<< HEAD
        const { name, email, password, level} = req.body;


        const user = await createUserService.execute({name, password, email, level});

        return res.json(name);
=======
        const {name, email, password, level} = req.body;

        const user = await createUserService.execute({name, email, password, level});

       return res.json(user);
>>>>>>> d8b25ea9123ecc72532bb25dd0b71aab83436d23
    }
}

export default CreateUserController;