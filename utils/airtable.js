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
    Cultural: !!lead?.culture,
    'Estilo de vida Exclusivo': !!lead?.exclusiveLifestyle,
    Instagram: lead?.instagram,
    Description: lead?.description,
    Phone: lead?.phone,
    'Perfil Type': lead?.perfilType, // User - Supplier
  });
}

export default saveLead;
