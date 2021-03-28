const express = require('express');
const port = 3001;
const app = express();
const data = require('./MOCK_DATA.json');

app.get('/api/animals', (_, res) => {
  res.status(200).json(data);
});

app.listen(port, console.log(`Server is running on port ${port}`));
