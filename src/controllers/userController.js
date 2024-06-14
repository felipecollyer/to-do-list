import UserService from '../services/userService.js';

class UserController {
  async getAllUsers(req, reply) {
    try {
      const users = await UserService.getAllUsers();
      reply.send(users);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  }

  async getUserById(req, reply) {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (!user) {
        reply.status(404).send({ error: 'Usuário não encontrado' });
        return;
      }
      reply.send(user);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  }

  async createUser(req, reply) {
    try {
      const user = await UserService.createUser(req.body);
      reply.status(201).send(user);
    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  }

  async updateUser(req, reply) {
    
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      reply.send(user);
    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  }

  async deleteUser(req, reply) {

    try {
      await UserService.deleteUser(req.params.id);
      reply.status(204).send(req.params.id);
    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  }
}

export default new UserController();
