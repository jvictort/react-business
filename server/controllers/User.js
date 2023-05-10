const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const User = require('../models/User');

require('dotenv/config');

const addUser = (req, res) => {
  const requestBody = req.body;

  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(requestBody.userPassword, salt);

  if(requestBody.userPassword === requestBody.repeatedPassword) {
    User.create({
      userName: requestBody.userName,
      userEmail: requestBody.userEmail,
      userPassword: passwordHash
    })
    .then(() => {
      res.status(200).send({
        status: 'success',
        message: 'Usuário cadastrado com sucesso.',
        data: null
      });
    })
    .catch(error => {
      console.log(error);
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

    if(!(bcrypt.compareSync(requestBody.userPassword, user.userPassword))) {
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
      process.env.JWT_KEY,
      {
        expiresIn: '24h'
      }
    );

    return res.status(200).send({
      status: 'success',
      message: 'Login realizado com sucesso.',
      data: token
    });
  });
}

module.exports = {
  add: addUser,
  login: loginUser
}
