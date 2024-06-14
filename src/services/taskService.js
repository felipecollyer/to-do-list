import TaskRepository from '../repositories/TaskRepository.js';

class TaskService {
  async getAllTasks() {
    return TaskRepository.findAll();
  }

  async getTaskById(id) {
    const task = await TaskRepository.findById(id);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  async createTask(data, idUser) {
    return TaskRepository.save(data,idUser);
  }

  async updateTask(id, data, idUser) {
    return TaskRepository.update(id, data,idUser);
  }

  async deleteTask(id) {
    return TaskRepository.remove(id);
  }
}

export default new TaskService();
