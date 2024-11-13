import prismaClient from "../../prisma";

class ListUserService{
    async execute(){
        const usuario = await prismaClient.user.findMany()
        return usuario
    }
}

export {ListUserService}