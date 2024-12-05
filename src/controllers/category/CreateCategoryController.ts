import {Request, Response} from 'express'
import { CreateCategoryService } from '../../services/category/CreateCategoryService'

class CreateCategoryController{
  async handle(req: Request, res: Response){
    if(req.headers.level ==="adm"){
      const { name } = req.body;

      const createCategoryService = new CreateCategoryService();

      const category = await createCategoryService.execute({
        name
      });

      return res.json(category);

    }
    else{
      console.log("não autorizado");
      return
    }
  }
}

export { CreateCategoryController }