import Joi from 'joi';

const profile = {
  email: Joi.string().email().required(),
  name: Joi.string().alphanum().required(),
  perfilType: Joi.string().required(),
};

const expiriencesType = {
  adventure: Joi.boolean(),
  nature: Joi.boolean(),
  tourism: Joi.boolean(),
  spiritualRelaxation: Joi.boolean(),
  romantic: Joi.boolean(),
  gastronomics: Joi.boolean(),
  cultural: Joi.boolean(),
  exclusiveLifestyle: Joi.boolean(),
};

export const UserSchema = Joi.object({
  ...profile,
  ...expiriencesType,
});

export const SupplierSchema = Joi.object({
  ...profile,
  phone: Joi.number().required(),
  description: Joi.string().alphanum(),
  instagram: Joi.string().alphanum(),
});
