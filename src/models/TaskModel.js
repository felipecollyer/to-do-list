import prisma from '../config/database.js';

class TaskModel {
  async getAll(id) {
    return prisma.task.findMany({where: {userId: id}});
  }

  async getById(id, userId) {
    try {
      return prisma.task.findFirst({ where: { 
        AND: [
          {id},
          {userId: userId}
        ]
       } });
    } catch (error) {
      throw new Error(`Error while fetching task with ID ${id}: ${error.message}`);
    }
  }

  async create(data, id) {
    try {
      return prisma.task.create({ 
      data: {
        title: data.title,
        content: data.content,
        status:data.status,
        userId: id
      }
      });
    } catch (error) {
      throw new Error(`Error while creating task: ${error.message}`);
    }
  }

  async update(id, data, idUser) {
    try {
      return prisma.task.updateMany({
        where: { 
          AND: [
            {id},
            {userId: idUser}
          ]
         } ,
        data: {
          title: data.title,
          content: data.content,
          status:data.status,
        }
      });
    } catch (error) {
      throw new Error(`Error while updating task with ID ${id}: ${error.message}`);
    }
  }

  async delete(id,userId) {
    try {
      return prisma.task.deleteMany({
        where: { 
          AND: [
            {id},
            {userId: userId}
          ]
         }
       });
    } catch (error) {
      throw new Error(`Error while deleting task with ID ${id}: ${error.message}`);
    }
  }
}

export default new TaskModel();

