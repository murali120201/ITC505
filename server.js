// Import the required modules
const express = require('express');     // ExpressJS library
const logger = require('morgan');       // For logging requests
const path = require('path');           // Node.js utility for file paths

// Create the Express app
const server = express();

// Middleware to handle form data
server.use(express.urlencoded({ extended: true }));

// Logger middleware (prints requests in console)
server.use(logger('dev'));

// Serve static files from the "public" directory
const publicPath = path.join(__dirname, 'public');
server.use(express.static(publicPath));

// A test route that returns a random number
server.get('/do_a_random', (req, res) => {
  const number = Math.floor(Math.random() * 100) + 1;
  res.send(`Your number is: ${number}`);
});

server.post('/ITC505/lab-7/index.html', (req, res) => {
    const { name, planetName, adjective, pluralNoun, adjective2, verbPast, sillyObject, emotion, verb } = req.body;
  
    if (!name || !planetName || !adjective || !pluralNoun || !adjective2 || !verbPast || !sillyObject || !emotion || !verb) {
      res.send(`
        <html>
          <head>
            <title>Missing Fields</title>
            <link rel="stylesheet" href="/ITC505/lab-7/style.css">
          </head>
          <body>
            <h1>⚠️ Missing Fields!</h1>
            <p>Please fill in all the blanks!</p>
            <a class="back-link" href="/ITC505/lab-7/index.html">Back to Form</a>
          </body>
        </html>
      `);
      return;
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

    <p><strong>Purpose:</strong> This project is a space-themed Mad Lib game built using ExpressJS and front-end web technologies. The user fills out a creative form — or uses random word generators — to generate a unique adventure story set in space.</p>

    <p><strong>Technology Stack:</strong> The server is built with Node.js and ExpressJS to handle form submissions and generate dynamic HTML responses. Front-end logic uses vanilla JavaScript for interactivity, HTML for structure, and CSS for styling.</p>

    <p><strong>User Interface Theme:</strong> The UI was designed to feel immersive and futuristic, in line with the space adventure theme. A dark background with gradients mimics a starry void, and elements glow slightly with blue/cyan hues to give it a sci-fi energy vibe. Glassmorphism was used for form containers to create a "space screen" feel.</p>

    <p><strong>Font Choices:</strong> The font family selected was <code>Segoe UI</code> / <code>Tahoma</code> / <code>Verdana</code>, which are clean, readable sans-serif fonts that convey a modern and professional look while being web-safe. The goal was to make the text easy to read across devices, while fitting the theme without needing custom font libraries.</p>

    <p><strong>Interactive Features:</strong> Each form input includes a 🎲 button to auto-fill random space-themed words, encouraging exploration and fun. This was implemented using JavaScript and an in-memory word bank with 20+ options per field.</p>

    <p><strong>Validation:</strong> Server-side validation checks for missing input and returns a user-friendly error message if any field is empty. This ensures complete stories are always generated.</p>

    <p><strong>Deployment:</strong> The app runs locally using <code>node server.js local</code> and serves static files through Express. Pages are accessed via <code>localhost:8080/ITC505/lab-7/index.html</code>.</p>

    <p><strong>Learning Outcome:</strong> This lab strengthened my skills in ExpressJS, front-end interactivity, client-server data flow, and web design fundamentals. I also learned how to make user experience engaging by blending logic with fun UI touches.</p>
  </div>
`;

    
  
    res.send(`
      <html>
        <head>
          <title>Space Story</title>
          <link rel="stylesheet" href="/ITC505/lab-7/style.css">
        </head>
        <body>
          <h1>🚀 Your Space Adventure!</h1>
          ${story}
          <br>
          <a class="back-link" href="/ITC505/lab-7/index.html">Create Another</a>
        </body>
      </html>
    `);
  });
  
      
// Determine the port (8080 for local testing)
const port = process.env.PORT || 8080;
 

// Start the server
server.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});

