import saveLead from '../../utils/airtable';
import { UserSchema } from '../../utils/schemas';
import { validate } from '../../lib/middlewares/validation';

async function handler(req, res) {
  const lead = req.body;

  try {
    const saved = await saveLead(lead);

    return res.status(200).send({ lead: saved });
  } catch (error) {
    return res.status(500).send({ err: error });
  }
}

export default validate(UserSchema, handler);
