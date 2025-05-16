const joi = require("joi");
const contactValidationSchema = joi.object({
  name: joi.string().required().messages({
    "string.base": "* Name Must Be String",
    "string.required": "* Name Is Required",
  }),
  number: joi.number().required().messages({
    "string.base": "* Number Must Be Number",
    "string.required": "* Number Is Required",
  }),
  email: joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.base": "* Email Must Be String",
    "string.required": "* Email is required",
  }),
  message: joi
    .string()
    .required()
    .messages({
      "string.base": "* Message Must Be String",
      "string.required": "* Message Is Required",
    }),
});
module.exports={contactValidationSchema}
