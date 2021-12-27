import express from 'express';
const app = express();
const PORT = 8000;
const home = (req, res) => {
  res.send(`Welcome to my Home!`);
};
app.get('/', home);
const Listening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};
app.listen(PORT, Listening);
