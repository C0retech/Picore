import { writeFileSync, readFileSync } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if(req.method !== 'POST') return res.status(405).end();

  const { text, type } = req.body;
  const filePath = path.join(process.cwd(), 'data/data.json');
  const data = JSON.parse(readFileSync(filePath, 'utf8'));

  if(type === 'roast') data.roasts.unshift(text);
  else data.quotes.unshift(text);

  writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.status(200).json({ success: true });
}
