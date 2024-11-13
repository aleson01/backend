import prismaClient from "../../prisma";

interface CreateUserProps{
    name: string;
    email:string;
    password:string;
}

class CreateUserService{
    async execute({name,email,password}:CreateUserProps){

        const usuario = await prismaClient.user.create({
            data:{
                name,
                password,
                email
            }
        })
        return usuario
    }
}

export {CreateUserService}