const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class PrestamoService {
  constructor() {}

  async create(data) {
    const newPrestamo = await models.Prestamo.create(data);

    return newPrestamo;
  }

  async find() {
    const prestamos = await models.Prestamo.findAll();
    //delete rta.data.password;
    return prestamos;
  }

  async findOne(id) {
    const prestamo = await models.Prestamo.findByPk(id);
    if (!prestamo) {
      throw boom.notFound('prestamo not found');
    }
    return prestamo;
  }
  async findByEmail(email) {
    const prestamo = await models.Prestamo.findOne({
      where: { email },
    });
    if (!prestamo) {
      throw boom.notFound('prestamo not found');
    }
    //delete prestamo.dataValues.password;
    return prestamo;
  }
  async findByCliente(cliente) {
    const prestamo = await models.Prestamo.findAll({
      where: { idCliente: cliente },
    });
    if (!prestamo) {
      throw boom.notFound('prestamo not found');
    }
    //delete prestamo.dataValues.password;
    return prestamo;
  }
  async update(id, changes) {
    const prestamo = await this.findOne(id);
    const rta = await prestamo.update(changes);
    return rta;
  }

  async delete(id) {
    const prestamo = await this.findOne(id);
    await prestamo.destroy();
    return { id };
  }
}

module.exports = PrestamoService;
