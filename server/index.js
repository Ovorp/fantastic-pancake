const express = require('express');
const port = 3001;
const app = express();
const data = require('./MOCK_DATA.json');

app.get('/api/animals', (req, res) => {
  let { animal } = req.query;
  let animalData = data.filter(
    (val) => val.animal.toLowerCase() === animal.toLowerCase()
  );
  if (animalData.length > 0) {
    res.status(200).json(animalData);
  } else res.status(200).json(data);
});

app.get('/api/animals/:id', (req, res) => {
  let { id } = req.params;
  let idData = data.filter((val) => val.id == id);
  res.status(200).json(idData);
});

app.listen(port, console.log(`Server is running on port ${port}`));
