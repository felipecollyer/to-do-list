import TaskController from '../controllers/taskController.js';

async function taskRoutes(fastify, options) {
  fastify.get('/', TaskController.getAllTasks);
  fastify.get('/:id', TaskController.getTaskById);
  fastify.post('/', TaskController.createTask);
  fastify.put('/:id', TaskController.updateTask);
  fastify.delete('/:id', TaskController.deleteTask);
}

export default taskRoutes;
