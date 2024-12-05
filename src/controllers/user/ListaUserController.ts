import express ,{ Request, Response} from "express";
import { ListUserService } from "../../services/user/ListUserService";

class ListUserController{
    
    async handle(req:Request, res:Response){
        if(req.headers.level ==="adm"){
            const createUserService = new ListUserService();

            const user = await createUserService.execute();

            return res.json(user);

        }
        else{
            console.log("não autorizado");
            return
        }
        
    }
}

export default ListUserController;