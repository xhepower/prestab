const Joi = require('joi');

const id = Joi.number().integer();
const idUser = Joi.number().integer();
const nombre = Joi.string().min(3);
const identidad = Joi.string().min(3);
const direccion = Joi.string().min(3);

const createClienteSchema = Joi.object({
  idUser: idUser.required(),
  nombre: nombre.required(),
  identidad: identidad.required(),
  direccion: direccion.required(),
});

const updateClienteSchema = Joi.object({
  nombre: nombre,
  identidad: identidad,
  direccion: direccion,
});

const getClienteSchema = Joi.object({
  id: id.required(),
});

module.exports = { createClienteSchema, updateClienteSchema, getClienteSchema };
