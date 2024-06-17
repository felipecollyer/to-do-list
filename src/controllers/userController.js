import jwtService from '../services/jwtService.js';
import UserService from '../services/userService.js';
import cryptService from '../services/cryptService.js';

class UserController {

  async loginUser(req, reply) {
    try {
      const {email, password} = req.body

      const user = await UserService.getUserByEmail(email);

      const checkUser = await  cryptService.validatePassword(password, user.password )

      if(!checkUser) {
        reply.status(500).send({ error: 'Password incorrect' });
      }

      const token = await jwtService.createToken(checkUser)

      reply.status(201).send({ token: token});


    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  }

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
