export function validate(schema, handler) {
  return async (req, res) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send({
        status: 'error',
        message: error.details[0].message,
      });
    }

    return handler(req, res);
  };
}
