import prismaClient from "../../prisma";

interface UserRequest{
  user_id: string;
}

class RemoveUserService{
  async execute({ user_id }: UserRequest){

    const user = await prismaClient.user.delete({
      where:{
        id: user_id
      }
    })

    return user;
    
  }
}

export { RemoveUserService }