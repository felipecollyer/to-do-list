import TaskModel from '../models/TaskModel.js';

class TaskRepository {
  async findAll(dataToken) {
    const {data:{ id, email}} = dataToken 

    return TaskModel.getAll(id);
  }

  async findById(id, dataToken) {
    const userId = dataToken.data.id
    return TaskModel.getById(id, userId);
  }

  async save(taskData,dataToken) {
    const {data:{ id, email}} = dataToken 

    return TaskModel.create(taskData,id);
  }

  async update(id, taskData, dataToken) {
    const userId = dataToken.data.id

    return TaskModel.update(id, taskData, userId);
  }

  async remove(id,dataToken) {
    const userId = dataToken.data.id
    return TaskModel.delete(id,userId);
  }
}

export default new TaskRepository();
