import {ListProductService} from '../../services/product/ListProductService'
import {Request, Response} from 'express'

class ListProductController{
    async handle(req: Request, res: Response){
      const listProductService = new ListProductService()
  
      const products = await listProductService.execute();
  
      return res.json(products);
  
    }
  }
  
  export { ListProductController }