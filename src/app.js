import fastify from 'fastify';
import userRoutes from './routes/userRoutes.js';
import prisma from './config/database.js'

const app = fastify({logger:true})

app.register(userRoutes, { prefix: '/api/users' });

app.get('/', async (request, reply) => {
  reply.send({ message: 'User CRUD API with Fastify, Prisma, and PostgreSQL' });
});

const start = async () => {
  try {
    await prisma.$connect();
    await app.listen({ port: 3000 })
    app.log.info(`Server listening on http://localhost:3000`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
