import fastify from 'fastify';
import fastifyMiddie from '@fastify/middie';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import menuRoutes from './routes/menuRoutes.js';


const createApp = async () => {
  const app = fastify({ logger: false });

  await app.register(fastifyMiddie)
  
  app.register(userRoutes, { prefix: '/api/users' });
  app.register(taskRoutes, { prefix: '/api/task' });
  app.register(menuRoutes, { prefix: '/' });

  app.get('/', async (request, reply) => {
    reply.send({ message: 'User CRUD API with Fastify, Prisma, and PostgreSQL' });
  });

  return app;
};

export default createApp;
