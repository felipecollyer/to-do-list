import jwtService from "../services/jwtService.js";

 function authMiddleware (req, res, next) {

  const token = req.headers['authorization'].split(' ')[1];
  
  jwtService.checkToken(token)
    .then(isValidToken => {
      if (isValidToken) {
        next(); 
      } else {
        res.statusCode = 401;
        res.send('Unauthorized');
      }
    })
    .catch(error => {
      console.error('Erro ao verificar o token:', error);
      res.statusCode = 500;
      res.send('Internal Server Error');
    });

}

export default authMiddleware