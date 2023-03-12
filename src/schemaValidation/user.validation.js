import Joi from 'joi';

const UserValidation = Joi.object({
  firstName: Joi.string().min(3).max(10).required(),
  firstName: Joi.string().min(3).max(10).required(),
  phone: Joi.string().max(10).required(),
  email: Joi.string().email().max(30).required(),
  password: Joi.string()
    .regex(
      /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"/,
    )
    .required(),
  confirmPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .options({ language: { any: { allowOnly: 'must match password' } } }),
});

export { UserValidation };
