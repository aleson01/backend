import {Request, Response} from 'express'
import { ListOrderTrueService } from '../../services/order/ListOrderTrueService'

class ListOrderTrueController{
  async handle(req: Request, res: Response){
    const listOrdersService = new ListOrderTrueService()

    const orders = await listOrdersService.execute();

    return res.json(orders);

  }
}

export { ListOrderTrueController }