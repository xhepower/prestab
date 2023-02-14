const Joi = require('joi');

const id = Joi.number().integer();
const monto = Joi.number().precision(2);
const createMoraSchema = Joi.object({
  monto: monto.required(),
});

const updateMoraSchema = Joi.object({
  monto: monto,
});

const getMoraSchema = Joi.object({
  id: id.required(),
});

module.exports = { createMoraSchema, updateMoraSchema, getMoraSchema };
