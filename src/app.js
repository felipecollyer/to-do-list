import fastify from 'fastify';
import userRoutes from './routes/userRoutes.js';

const createApp = () => {
  const app = fastify({ logger: true });

  app.register(userRoutes, { prefix: '/api/users' });

  app.get('/', async (request, reply) => {
    reply.send({ message: 'User CRUD API with Fastify, Prisma, and PostgreSQL' });
  });

  return app;
};

export default createApp;
