import TaskModel from '../models/TaskModel.js';

class TaskRepository {
  async findAll() {
    return TaskModel.getAll();
  }

  async findById(id) {
    return TaskModel.getById(id);
  }

  async save(taskData,idUser) {
    return TaskModel.create(taskData,idUser);
  }

  async update(id, taskData, idUser) {
    return TaskModel.update(id, taskData, idUser);
  }

  async remove(id) {
    return TaskModel.delete(id);
  }
}

export default new TaskRepository();
