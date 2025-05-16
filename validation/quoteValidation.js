const joi = require("joi");
const quoteValidationSchema = joi.object({
  name: joi.string().required().messages({
    "string.base": "* Name must be a string",
    "any.required": "* Name is required",
  }),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "Email Must Be String",
      "any.required": "* Email is required",
    }),
  phoneNumber: joi.number().required().messages({
    "string.base": "* Phone Number Must Be Number",
    "any.required": "* Phone Number is required",
  }),
  service: joi.string().required().messages({
    "string.base": "* Service Must be String",
    "any.required": "*  Service is required",
  }),
  companyType: joi.string().required().messages({
    "string.base": "* Company Type Must Be String",
    "any.required": "* Company Type is required",
  }),
});

module.exports = quoteValidationSchema;
