const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const secret = require('./jwtConfig');

const User = require('../models/User');

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'userEmail',
      passwordField: 'userPassword'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({
          where: {
            userEmail: email
          }
        });

        if(!user) {
          return done(null, false, { message: 'Usuário não encontrado' });
        }

        if(password != user.userPassword) {
          return done(null, false, { message: 'Senha incorreta' });
        }

        return done(null, user, { message: 'Login realizado com sucesso' });

      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      secretOrKey: `${secret}`,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        const user = await user.findOne({
          where: {
            userEmail: token.email
          }
        });

        if(!user) {
          return done(null, false, { message: 'Usuário não encontrado' });
        }

        if(token.password != user.userPassword) {
          return done(null, false, { message: 'Senha incorreta' });
        }

        return done(null, user, { message: 'Login realizado com sucesso' });
        console.log('Deu certo krl');
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = {
  loginAuthenticate: passport.authenticate('login'),
  jwtAuthenticate: passport.authenticate('jwt'),
}
