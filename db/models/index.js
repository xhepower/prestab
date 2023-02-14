const { User, UserSchema } = require('./user.model');
const { Ruta, RutaSchema } = require('./ruta.model');
const { Gasto, GastoSchema } = require('./gasto.model');
const { Cliente, ClienteSchema } = require('./cliente.model');
const { Prestamo, PrestamoSchema } = require('./prestamo.model');
const { Pago, PagoSchema } = require('./pago.model');
const { Mora, MoraSchema } = require('./mora.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Gasto.init(GastoSchema, Gasto.config(sequelize));
  Ruta.init(RutaSchema, Ruta.config(sequelize));
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Prestamo.init(PrestamoSchema, Prestamo.config(sequelize));
  Pago.init(PagoSchema, Pago.config(sequelize));
  Mora.init(MoraSchema, Mora.config(sequelize));

  User.associate(sequelize.models);
  Gasto.associate(sequelize.models);
  Ruta.associate(sequelize.models);
  Cliente.associate(sequelize.models);
  Prestamo.associate(sequelize.models);
  Pago.associate(sequelize.models);
  // Mora.associate(sequelize.models);
}

module.exports = setupModels;
