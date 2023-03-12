const validate = validator => {
  return async function (req, res, next) {
    try {
      const validated = await validator.validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err) {
      res.status(200).json({ message: err.message });
    }
  };
};

export default validate;
