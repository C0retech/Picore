import fetch from 'node-fetch';

export default async function handler(req, res) {
  if(req.method !== 'POST') return res.status(405).json({error:'Only POST allowed'});
  
  const { text, type } = req.body;
  if(!text || !type) return res.status(400).json({error:'Missing text or type'});
  
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';
  const filePath = process.env.DATA_FILE || 'data.json';
  const token = process.env.GITHUB_TOKEN;

  // 1️⃣ Hämta befintlig data.json
  const getRes = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}?ref=${branch}`, {
    headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json' }
  });
  
  if(!getRes.ok) return res.status(getRes.status).json({error:'Could not fetch data.json'});

  const fileData = await getRes.json();
  const sha = fileData.sha;
  const content = JSON.parse(Buffer.from(fileData.content, 'base64').toString());

  // 2️⃣ Lägg till nytt bidrag
  if(type==='roast') content.roasts.unshift(text);
  else content.quotes.unshift(text);

  // 3️⃣ Uppdatera filen på GitHub
  const updateRes = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
    method: 'PUT',
    headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json' },
    body: JSON.stringify({
      message: `Add new ${type}`,
      content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
      sha,
      branch
    })
  });

  if(!updateRes.ok){
    const err = await updateRes.json();
    return res.status(updateRes.status).json({error: err.message});
  }

  res.status(200).json({success:true, added:text, type});
}
