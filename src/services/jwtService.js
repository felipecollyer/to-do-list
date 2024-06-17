import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET

class jwtService {

  async verifyToken(req, reply) {
    const {authorization} = req.headers
    const token = authorization.split(' ')[1]
    const decoded =  jwt.verify(token, secret)
    reply.status(200).send(decoded);
  }

  async createToken(checkUser) {
    return jwt.sign({ data: checkUser }, secret);
  }
}

export default new jwtService();
