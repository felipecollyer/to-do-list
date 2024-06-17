import UserController from '../controllers/userController.js';
import jwtService from '../services/jwtService.js';

async function menuRoutes(fastify, options) {
  fastify.post('/login', UserController.loginUser);
  fastify.get('/jwt', jwtService.verifyToken);

}

export default menuRoutes;
