import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CreateUserProps{
    name: string;
    email:string;
    password:string;
}

class CreateUserService{
    async execute({name,email,password}:CreateUserProps){

        if(!email){
            throw new Error("Email Incorreto")
        }

        // Verifica se email já existe
        const existeEmail = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(existeEmail){
            throw new Error("Esse email já existe")
        }

        const passwordHash = await hash(password,10)

        const usuario = await prismaClient.user.create({
            data:{
                name,
                password:passwordHash,
                email
            }
        })
        return usuario
    }
}

export {CreateUserService}