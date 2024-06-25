import TaskRepository from '../repositories/TaskRepository.js';
import jwtService from './jwtService.js';

class TaskService {
  async getAllTasks(authorization) {
    const dataToken =  await jwtService.verifyToken(authorization)
    return TaskRepository.findAll(dataToken);
  }

  async getTaskById(id, authorization) {
    const dataToken =  await jwtService.verifyToken(authorization)
    const task = await TaskRepository.findById(id,dataToken);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  async createTask(data, authorization) {
    const dataToken =  await jwtService.verifyToken(authorization)
    return TaskRepository.save(data,dataToken);
  }

  async updateTask(id, data, authorization) {
    const dataToken =  await jwtService.verifyToken(authorization)

    return TaskRepository.update(id, data,dataToken);
  }

  async deleteTask(id,authorization) {
    const dataToken =  await jwtService.verifyToken(authorization)

    return TaskRepository.remove(id,dataToken);
  }
}

export default new TaskService();
