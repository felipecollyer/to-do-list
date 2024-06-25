import TaskController from '../controllers/taskController.js';
import authMiddleware from '../utils/authMiddleware.js';

async function taskRoutes(fastify, options) {

  fastify.addHook('preHandler', authMiddleware)

  fastify.get('/', TaskController.getAllTasks);
  fastify.get('/:id', TaskController.getTaskById);
  fastify.post('/', TaskController.createTask);
  fastify.put('/:id', TaskController.updateTask);
  fastify.delete('/:id', TaskController.deleteTask);
}

export default taskRoutes;
