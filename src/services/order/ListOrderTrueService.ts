import prismaClient from "../../prisma";

class ListOrderTrueService{
  async execute(){

    const orders = await prismaClient.order.findMany({
      where:{
        status: false,
      },
      orderBy:{
        created_at: 'desc'
      }
    })

    return orders;

  }
}

export { ListOrderTrueService }