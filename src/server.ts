import express from 'express';
import router from './routes';
import path from 'path';


const app = express();

app.use(express.json());

var cors = require('cors')

app.use(cors())

app.use(router);

app.use('/files', express.static(path.resolve(__dirname,'..','tmp')))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});