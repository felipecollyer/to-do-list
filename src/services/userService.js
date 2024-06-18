import UserRepository from '../repositories/UserRepository.js';
import bcryptService from './bcryptService.js';


class UserService {

  async getUserByEmail(email) {
    return UserRepository.findUserEmail(email);
  }

  async getAllUsers() {
    return UserRepository.findAll();
  }

  async getUserById(id) {
    const user = await UserRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async createUser(data) {
    const passwordHash = await bcryptService.createdHash(data.password)
    return UserRepository.save(data,passwordHash);
  }

  async updateUser(id, data) {
    return UserRepository.update(id, data);
  }

  async deleteUser(id) {
    return UserRepository.remove(id);
  }
}

export default new UserService();
