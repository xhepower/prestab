const { Model, Sequelize } = require('sequelize');

const MORA_TABLE = 'moras';
const MoraSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class Mora extends Model {
  //static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: MORA_TABLE,
      modelName: 'Mora',
      timestamps: false,
    };
  }
}

module.exports = { Mora, MoraSchema, MORA_TABLE };
