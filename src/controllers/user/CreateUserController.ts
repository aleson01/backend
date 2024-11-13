import { Request, Response} from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController{
    async handle(req:Request, res:Response){
        const createUserService = new CreateUserService();
        const {name, password, email} = req.body as {name:string, password: string, email: string};

        const user = await createUserService.execute({name, password, email});

        return res.json(user);
    }
}

export default CreateUserController;