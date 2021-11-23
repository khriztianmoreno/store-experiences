import Joi from 'joi';

const profile = {
  email: Joi.string().email().required(),
  name: Joi.string().min(3).max(50).required(),
  perfilType: Joi.string().required(),
};

const expiriencesType = {
  adventure: Joi.boolean(),
  nature: Joi.boolean(),
  tourism: Joi.boolean(),
  spiritualRelaxation: Joi.boolean(),
  romantic: Joi.boolean(),
  gastronomics: Joi.boolean(),
  culture: Joi.boolean(),
  exclusiveLifestyle: Joi.boolean(),
};

export const UserSchema = Joi.object({
  ...profile,
  ...expiriencesType,
  aceptTerms: Joi.boolean().required(),
});

export const SupplierSchema = Joi.object({
  ...profile,
  ...expiriencesType,
  phone: Joi.string().required(),
  description: Joi.string().min(3),
  instagram: Joi.string().min(3),
  aceptTerms: Joi.boolean().required(),
});
