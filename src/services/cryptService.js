import crypto from 'node:crypto';


export class cryptoService {
  // Função para gerar o hash de uma senha
 async  generatePassword(senha) {
  const sal = crypto.randomBytes(16).toString('hex'); 
  const iteracoes = 100000; 
  const chaveLen = 64; 
  const algoritmo = 'sha512'; 

 
const key = crypto.pbkdf2Sync(senha, sal, iteracoes, chaveLen, algoritmo);
const keyString = key.toString('hex')

  return `${sal}:${iteracoes}:${keyString}`;
}

async  validatePassword(senhaInserida, hashArmazenado) {

  const [sal, iteracoes, hashOriginal] = hashArmazenado.split(':');
  const key = crypto.pbkdf2Sync(senhaInserida, sal, 100000, 64, 'sha512');
  const keyString = key.toString('hex')
  
  return hashOriginal === keyString;
}

}  

export default new cryptoService()
// Exemplo de uso
// (async () => {
//   const senhaOriginal = 'minhaSenhaSecreta';

//   // Criptografando a senha antes de salvar
//   const hash = await gerarHashSenha(senhaOriginal);
//   console.log('Senha criptografada (hash):', hash);

//   // Verificando a senha na autenticação
//   const senhaCorreta = await verificarSenha('minhaSenhaSecreta', hash);
//   console.log('Senha correta:', senhaCorreta); // Deve exibir true

//   const senhaIncorreta = await verificarSenha('senhaErrada', hash);
//   console.log('Senha incorreta:', senhaIncorreta); // Deve exibir false
// })();

