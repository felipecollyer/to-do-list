import bcrypt from "bcrypt"
const saltRounds = 10;


class bcryptService {

 async createdHash(password) {
   return bcrypt.hashSync(password, saltRounds);
  }

 async checkHash(password,hashDB) {
   return bcrypt.compareSync(password, hashDB)
  }

}



export default new bcryptService()