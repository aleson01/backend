import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest{
  email: string;
  password: string;
}

class AuthUserService{
  async execute({ email, password }: AuthRequest){
    //Verificar se o email existe.
    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(!user){
      throw new Error("Email ou Senha informado está incorreto")
    }

    // preciso verificar se a senha que ele mandou está correta.
    const passwordHash = await compare(password, user.password)

    if(!passwordHash){
      throw new Error("Email ou Senha informado está incorreto")
    }


    // Se deu tudo certo vamos gerar o token pro usuario.
    const token = sign(
      {
        name: user.name,
        email: user.email,
        level: user.level
      },
      process.env.SECRET_KEY,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )


    return { 
      id: user.id,
      name: user.name,
      email: user.email,
      level: user.level,
      token: token
     }
  }
}

export { AuthUserService };