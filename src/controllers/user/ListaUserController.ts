import express ,{ Request, Response} from "express";
import { ListUserService } from "../../services/user/ListUserService";

class ListUserController{
    async handle(req:Request, res:Response){
        const createUserService = new ListUserService();

        const user = await createUserService.execute();

        return res.json(user);
    }
}

export default ListUserController;