import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET

class jwtService {

  async verifyToken(req, reply) {
    const {authorization} = req.headers
    const token = authorization.split(' ')[1]
    const decoded =  jwt.verify(token, secret)
    reply.status(200).send(decoded);
  }

  async createToken(user) {
    return jwt.sign({ data: {id: user.id,
      email: user.email
    } }, secret);
  }
}

export default new jwtService();
