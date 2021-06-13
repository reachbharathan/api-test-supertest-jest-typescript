import Joi from "joi";

export const schema = Joi.object({
  login: Joi.string().required(),
  id: Joi.number().required(),
  node_id: Joi.string().required(),
  avatar_url: Joi.string().required(),
  gravatar_id: Joi.string().allow(''),
  url: Joi.string().required(),
  html_url: Joi.string().required(),
  site_admin: Joi.boolean().required(),
});