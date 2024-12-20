
import {Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService';


class CreateUserController{
    async handle(req:Request, res:Response){
        const createUserService = new CreateUserService();

        const {name, email, password, level} = req.body;

        console.log(name)
        console.log(email)
        console.log(password)
        console.log(level)

        const user = await createUserService.execute({name, email, password, level});

        return res.json(user);
       
    }
}

export default CreateUserController;