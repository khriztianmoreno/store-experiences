import Airtable from 'airtable';

const apiKey = process.env.AIRTABLE_KEY;
const base = process.env.AIRTABLE_BASE;
const table = process.env.AIRTABLE_TABLE;

const airtable = new Airtable({ apiKey });

function saveLead(lead) {
  return airtable.base(base)(table).create({
    Name: lead?.name,
    Email: lead?.email,
    Aventura: !!lead?.adventure,
    Naturaleza: !!lead?.nature,
    Turismo: !!lead?.tourism,
    'Espirituales y Relajacion': !!lead?.spiritualRelaxation,
    Romanticas: !!lead?.romantic,
    Gastronomicas: !!lead?.gastronomics,
    Cultural: !!lead?.cultural,
    'Estilo de vida Exclusivo': !!lead?.exclusiveLifestyle,
    Instagram: lead?.instagram,
    Description: lead?.description,
    'Perfil Type': lead?.perfilType,
  });
}

export default async function handler(req, res) {
  const lead = req.body;

  try {
    const saved = await saveLead(lead);

    return res.status(200).send({ lead: saved });
  } catch (error) {
    return res.status(500).send({ err: error });
  }
}
