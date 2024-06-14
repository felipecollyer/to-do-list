import UserModel from '../models/UserModel.js';

class UserRepository {
  async findAll() {
    return UserModel.getAll();
  }

  async findById(id) {
    return UserModel.getById(id);
  }

  async save(userData) {
    return UserModel.create(userData);
  }

  async update(id, userData) {
    return UserModel.update(id, userData);
  }

  async remove(id) {
    return UserModel.delete(id);
  }
}

export default new UserRepository();
