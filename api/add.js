import fetch from 'node-fetch';

export default async function handler(req, res) {
  if(req.method !== 'POST') return res.status(405).end();

  const { text, type } = req.body;
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const REPO = 'ditt-användarnamn/ditt-repo';
  const FILE_PATH = 'data/data.json';
  const BRANCH = 'main';

  // Hämta nuvarande data.json från GitHub
  const fileRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` }
  });
  const fileData = await fileRes.json();
  const content = JSON.parse(Buffer.from(fileData.content, 'base64').toString());

  if(type === 'roast') content.roasts.unshift(text);
  else content.quotes.unshift(text);

  // Commit tillbaka till GitHub
  const updatedContent = Buffer.from(JSON.stringify(content, null, 2)).toString('base64');
  await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
    method: 'PUT',
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
    body: JSON.stringify({
      message: `Add new ${type}`,
      content: updatedContent,
      sha: fileData.sha,
      branch: BRANCH
    })
  });

  res.status(200).json({ success: true });
}
