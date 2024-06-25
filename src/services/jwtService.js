import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET

class jwtService {

  async verifyToken(authorization) {
    const token = authorization.split(' ')[1]
    const decoded =  jwt.verify(token, secret)
    return decoded
  }

  async createToken(user) {
    return jwt.sign({ data: {id: user.id,
      email: user.email
    } }, secret);
  }

  async checkToken(token) {
    try {
      jwt.verify(token, secret);
      return true;
    } catch (error) {
      return false; 
    }
  }
}

export default new jwtService();
