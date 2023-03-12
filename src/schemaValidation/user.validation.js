import Joi from 'joi';

const UserValidation = Joi.object({
  firstName: Joi.string().min(3).max(10).required(),
  lastName: Joi.string().min(3).max(10).required(),
  phone: Joi.string()
    .regex(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/)
    .required(),
  email: Joi.string().email().max(30).required(),
  password: Joi.string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    )
    .required(),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
});

export default UserValidation;
