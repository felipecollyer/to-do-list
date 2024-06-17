import UserModel from '../models/UserModel.js';

class UserRepository {

  async findUserEmail(email) {
    return UserModel.getByEmail(email);
  }

  async findAll() {
    return UserModel.getAll();
  }

  async findById(id) {
    return UserModel.getById(id);
  }

  async save(userData,passwordCrypt) {
    return UserModel.create(userData,passwordCrypt);
  }

  async update(id, userData) {
    return UserModel.update(id, userData);
  }

  async remove(id) {
    return UserModel.delete(id);
  }
}

export default new UserRepository();
