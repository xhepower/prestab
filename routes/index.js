const express = require('express');

const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const clientesRouter = require('./clientes.router');
const rutasRouter = require('./rutas.router');
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/auth', authRouter);
  router.use('/users', usersRouter);
  router.use('/clientes', clientesRouter);
  router.use('/rutas', rutasRouter);
}

module.exports = routerApi;
