import Joi from 'joi';

export const todoSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  isDone: Joi.boolean().required(),
  isPrivate: Joi.boolean().required()
});
