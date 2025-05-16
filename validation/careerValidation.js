const Joi = require("joi");

const careerValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "* Name must be a string",
    "any.required": "* Name is required",
  }),

  position: Joi.string().required().messages({
    "string.base": "* Position must be a string",
    "any.required": "* Position is required",
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "* Email must be a string",
      "string.email": "* Email must be a valid email address",
      "any.required": "* Email is required",
    }),

  contact_number: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.base": "* Contact Number must be a string of digits",
      "string.pattern.base": "* Contact Number must be exactly 10 digits",
      "any.required": "* Contact Number is required",
    }),

  experience: Joi.number().positive().required().messages({
    "number.base": "* Experience must be a number",
    "number.positive": "* Experience must be a positive number",
    "any.required": "* Experience is required",
  }),

  expectedCtc: Joi.number().positive().required().messages({
    "number.base": "* Expected CTC must be a number",
    "number.positive": "* Expected CTC must be a positive number",
    "any.required": "* Expected CTC is required",
  }),

  currentCtc: Joi.number().positive().required().messages({
    "number.base": "* Current CTC must be a number",
    "number.positive": "* Current CTC must be a positive number",
    "any.required": "* Current CTC is required",
  }),

  joiningPeriod: Joi.string().required().messages({
    "string.base": "* Joining Period must be a string",
    "any.required": "* Joining Period is required",
  }),
});

module.exports = careerValidationSchema;
