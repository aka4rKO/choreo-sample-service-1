const express = require('express');

const app = express();
const port = 8080;

app.get('/greet', (req, res) => {
  const name = req.query.name;
  if (name) {
    const greeting = `greetings ${name}!`;
    res.send(greeting);
  } else {
    res.status(400).send('Missing name parameter');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
