import Joi = require("@hapi/joi");
import bcrypt from "bcryptjs";
const Userschema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phone: Joi.string()
    .length(10)
    .trim()
    .regex(/^[0-9]{7,10}$/)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string()
    .min(4)
    .max(30)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
});

export default Userschema;
