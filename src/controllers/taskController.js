import TaskService from '../services/taskService.js';

class TaskController {
  async getAllTasks(req, reply) {
    try {
      const tasks = await TaskService.getAllTasks();
      reply.send(tasks);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  }

  async getTaskById(req, reply) {
    try {
      const task = await TaskService.getTaskById(req.params.id);
      if (!task) {
        reply.status(404).send({ error: 'Tarefa não encontrada' });
        return;
      }
      reply.send(task);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  }

  async createTask(req, reply) {
    try {
      const idUser = req.headers.authorization.split(' ')[1]
      const task = await TaskService.createTask(req.body, idUser);
      reply.status(201).send(task);
    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  }

  async updateTask(req, reply) {
    try {
      const idUser = req.headers.authorization.split(' ')[1]
      const task = await TaskService.updateTask(req.params.id, req.body, idUser);
      reply.send(task);
    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  }

  async deleteTask(req, reply) {
    try {
      await TaskService.deleteTask(req.params.id);
      reply.status(204).send(req.params.id);
    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  }
}

export default new TaskController(); 
