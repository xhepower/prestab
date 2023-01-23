const { User, UserSchema } = require('./user.model');
const { Cliente, ClienteSchema } = require('./cliente.model');
const { Ruta, RutaSchema } = require('./ruta.model');
function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Ruta.init(RutaSchema, Ruta.config(sequelize));

  User.associate(sequelize.models);
  Cliente.associate(sequelize.models);
  Ruta.associate(sequelize.models);
}

module.exports = setupModels;
