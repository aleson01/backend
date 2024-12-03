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