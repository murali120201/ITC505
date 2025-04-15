const express = require('express');
const path = require('path');
const morgan = require('morgan');

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));

const publicPath = path.join(__dirname, 'public');
server.use(express.static(publicPath));

server.get('/do_a_random', (req, res) => {
  const number = Math.floor(Math.random() * 100) + 1;
  res.send(`Your number is: ${number}`);
});

server.post('/ITC505/lab-7/index.html', (req, res) => {
  const { name, planetName, adjective, pluralNoun, adjective2, verbPast, sillyObject, emotion, verb } = req.body;

  if (!name || !planetName || !adjective || !pluralNoun || !adjective2 || !verbPast || !sillyObject || !emotion || !verb) {
    return res.send(`
      <html><head><title>Missing Fields</title><link rel="stylesheet" href="/ITC505/lab-7/style.css"></head><body>
      <h1>⚠️ Missing Fields!</h1><p>Please fill in all the blanks!</p>
      <a class="back-link" href="/ITC505/lab-7/index.html">Back to Form</a>
      </body></html>
    `);
  }

  const story = `
    <div class="story-box">
      <p>Captain <strong>${name}</strong> reporting from the edge of the galaxy.</p>
      <p>We’ve landed on Planet <strong>${planetName}</strong>, a <strong>${adjective}</strong> world full of <strong>${pluralNoun}</strong>.</p>
      <p>Suddenly, a <strong>${adjective2}</strong> creature <strong>${verbPast}</strong> toward us at incredible speed!</p>
      <p>I grabbed my <strong>${sillyObject}</strong> and took cover.</p>
      <p>Everyone felt <strong>${emotion}</strong>, but we knew we had to <strong>${verb}</strong> quickly!</p>
    </div>
    <div class="addendum">
      <h2>📝 Addendum</h2>
      <p><strong>Purpose:</strong> Space-themed Mad Lib using Node.js & ExpressJS.</p>
      <p><strong>Stack:</strong> ExpressJS, HTML, CSS</p>
      <p><strong>Theme:</strong> Space UI, modern sans-serif fonts</p>
      <p><strong>Deployment:</strong> Works on Azure with process.env.PORT</p>
    </div>
  `;

  res.send(`
    <html><head><title>Space Adventure</title><link rel="stylesheet" href="/ITC505/lab-7/style.css"></head><body>
    <h1>🚀 Your Space Adventure!</h1>${story}
    <br><a href="/ITC505/lab-7/index.html">Create Another</a></body></html>
  `);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('✅ Server running on port', port);
});
