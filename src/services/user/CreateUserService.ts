import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CreateUserProps{
    name: string;
    email:string;
    password:string;
    level:string;
}

class CreateUserService{
    async execute({name,email,password,level}:CreateUserProps){

<<<<<<< HEAD
        //verifica se ele nao enviou um email
=======
        
>>>>>>> d8b25ea9123ecc72532bb25dd0b71aab83436d23
        if(!email){
            throw new Error("Email Incorreto!")
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
                email,
<<<<<<< HEAD
                level,
                password:passwordHash
=======
                password:passwordHash,
                level
>>>>>>> d8b25ea9123ecc72532bb25dd0b71aab83436d23
            }
        })
        return usuario
    }
}

export {CreateUserService}