import express from 'express';
import router from './routes';
import path from 'path';
import prismaClient from './prisma';


const app = express();

app.use(express.json());

prismaClient.$connect(process.env.MONGO_URI).then(()=>{
    console.log("Conectado ao MongoDB")
}).catch((error)=> console.error("Erro ao conectar ao MongoDB: ", error))

var cors = require('cors')

app.use(cors())

app.use(router);

app.use('/files', express.static(path.resolve(__dirname,'..','tmp')))

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

/**
 * PORT = 3333

USUARIO_LOGIN = admin

USUARIO_SENHA = senha123

SECRET_KEY=minha_chave_secreta

DATABASE_URL="mongodb+srv://alesontinoco:1q2w3e@pizzaria.lorhb.mongodb.net/pizzaria?retryWrites=true&w=majority&appName=pizzaria" 

MONGO_URI = "mongodb://admin:senha123@localhost:27017/meu_banco_de_dados"
 */