const User = require('../models/User');

const addUser = (req, res) => {
  const requestBody = req.body;

  if(requestBody.userPassword === requestBody.repeatedPassword) {
    User.create({
      userName: requestBody.userName,
      userEmail: requestBody.userEmail,
      userPassword: requestBody.userPassword
    })
    .then(() => {
      res.status(200).send({
        status: 'success',
        message: 'Usuário cadastrado com sucesso.',
        data: null
      });
    })
    .catch(error => {
      res.status(400).send({
        status: 'error',
        message: 'Ocorreu um erro. Não foi possível cadastrar este usuário.',
        data: null
      });
    })
  }
}

module.exports = {
  add: addUser
}
