const jwt = require('jsonwebtoken');

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

const loginUser = (req, res) => {
  const requestBody = req.body;

  User.findOne({
    where: {
      userEmail: requestBody.userEmail
    }
  })
  .then(user => {
    if(!user) {
      return res.status(401).send({
        status: 'error',
        message: 'Ocorreu um erro. Email ou senha incorretas.',
        data: null
      });
    }

    if(user.userPassword !== requestBody.userPassword) {
      return res.status(401).send({
        status: 'error',
        message: 'Ocorreu um erro. Email ou senha incorretas.',
        data: null
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        name: user.userName,
        email: user.userEmail
      },
      '%JRe25#32$%',
      {
        expiresIn: '24h'
      }
    );

    return res.status(200).send({
      status: 'success',
      message: 'Ocorreu um erro. Não existe um usuário com este email.',
      data: token
    });
  });
}

module.exports = {
  add: addUser,
  login: loginUser
}
