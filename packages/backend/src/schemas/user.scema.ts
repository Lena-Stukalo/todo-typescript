import Joi from 'joi';

export const userSchemaReg = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required()
});
export const userSchemaLog = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
});
export const userSchemaReset = Joi.object({
  email: Joi.string().required()
});
export const userSchemaChange = Joi.object({
  password: Joi.string().required()
});
