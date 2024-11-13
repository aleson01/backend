import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());

app.use('/auth', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});