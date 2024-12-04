import {Request, Response } from 'express'
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController{
    async handle(req:Request, res:Response){
        const createUserService = new CreateUserService();
        const { name, email, password, level} = req.body;


        const user = await createUserService.execute({name, password, email, level});

        return res.json(name);
    }
}

export default CreateUserController;