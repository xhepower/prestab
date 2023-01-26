'use strict';

const { USER_TABLE } = require('./../models/user.model');
const { CLIENTE_TABLE } = require('./../models/cliente.model');
const { RUTA_TABLE } = require('./../models/ruta.model');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      recoveryToken: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
        field: 'recovery_token',
      },
      role: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'usuario',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(CLIENTE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      idUser: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      nombre: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      identidad: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      direccion: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(RUTA_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      idUser: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: USER_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      descripcion: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });

    //hasta aqui
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CLIENTE_TABLE);
    await queryInterface.dropTable(RUTA_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  },
};
