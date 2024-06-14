import createApp from './app.js';
import dbServer from './config/database.js';

const start = async () => {
  const app = createApp();

  try {  
    await app.listen({ port: 3000 });
    dbServer.$connect().then(()=> console.log(`conectado ao DB`))
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
