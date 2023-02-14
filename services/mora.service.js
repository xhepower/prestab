const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
class MoraService {
  constructor() {}

  async create(data) {
    const newMora = await models.Mora.create(data);

    return newMora;
  }

  async find() {
    const moras = await models.Mora.findAll();
    return moras;
  }

  async findOne(id) {
    const mora = await models.Mora.findByPk(id);
    if (!mora) {
      throw boom.notFound('mora not found');
    }
    return mora;
  }
  async findByEmail(email) {
    const mora = await models.Mora.findOne({
      where: { email },
    });
    if (!mora) {
      throw boom.notFound('mora not found');
    }
    //delete mora.dataValues.password;
    return mora;
  }

  async update(id, changes) {
    const mora = await this.findOne(id);
    const rta = await mora.update(changes);
    return rta;
  }

  async delete(id) {
    const mora = await this.findOne(id);
    await mora.destroy();
    return { id };
  }
}

module.exports = MoraService;
