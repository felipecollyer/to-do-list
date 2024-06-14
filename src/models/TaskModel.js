import prisma from '../config/database.js';

class TaskModel {
  async getAll() {
    return prisma.task.findMany();
  }

  async getById(id) {
    try {
      return prisma.task.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error while fetching task with ID ${id}: ${error.message}`);
    }
  }

  async create(data, idUser) {
    try {
      return prisma.task.create({ 
      data: {
        title: data.title,
        content: data.content,
        status:data.status,
        userId: idUser
      }
      });
    } catch (error) {
      throw new Error(`Error while creating task: ${error.message}`);
    }
  }

  async update(id, data, idUser) {
    try {
      return prisma.task.update({
        where: { id },
        data: {
          title: data.title,
          content: data.content,
          status:data.status,
          userId: idUser
        }
      });
    } catch (error) {
      throw new Error(`Error while updating task with ID ${id}: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      return prisma.task.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error while deleting task with ID ${id}: ${error.message}`);
    }
  }
}

export default new TaskModel();
