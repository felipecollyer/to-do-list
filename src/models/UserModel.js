import prisma from '../config/database.js';

class UserModel {

  async getAll() {
    return prisma.user.findMany();
  }

  async getById(id) {
    try {
      return prisma.user.findUnique({ where: { id:id  } });
    } catch (error) {
      return error
    }
    
  }

  async getByEmail(email) {
    try {
      return prisma.user.findUnique({ where: { email:email  } });
    } catch (error) {
      return error
    }
  }

  async create(data) {
    return prisma.user.create({ data });
  }

  async update(id, data) {
  
      return prisma.user.update({
        where: { id :id },
        data,
      });
  
  }

  async delete(id) {
    return prisma.user.delete({ where: { id: id } });
  }
}

export default new UserModel();
