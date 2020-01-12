const express = require('express');
const app = express();
const cors = require('cors');
const phones = require('./phones.json')

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

// app.get('/', (req, res, next) => {
//   res.render('index');
// });

app.get("/phones", (req, res, next) => {
  res.json(phones);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});