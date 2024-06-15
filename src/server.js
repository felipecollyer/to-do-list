import 'dotenv/config';
import createApp from './app.js';
import dbServer from './config/database.js';

const port = process.env.SERVER_PORT

const start = async () => {
  const app = createApp();

  try {
    await app.listen({ port });
    console.log(`Servidor conectado na porta ${port}`);

    await dbServer.$connect();
    console.log('Conectado ao DB');

  } catch (err) {
    console.error('Erro ao iniciar o servidor ou conectar ao banco de dados:', err);
    process.exit(1);
  }
};

start();
