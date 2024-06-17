import UserRepository from '../repositories/UserRepository.js';

class UserService {

  async getUserByEmail(email) {
    return UserRepository.findUserEmail(email);
  }

   async verifyPassword(user, password) {

    const {id, email} = user

    if(user.password  === password) {
      return {id, email}
    }else {
      return false
    }
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
    return UserRepository.save(data);
  }

  async updateUser(id, data) {
    return UserRepository.update(id, data);
  }

  async deleteUser(id) {
    return UserRepository.remove(id);
  }
}

export default new UserService();
