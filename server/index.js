const express = require('express');
const PORT = 5555;
const app = express();
const data = require('./MOCK_DATA.json');
const sc = require('./controller/getController');

app.get('/api/animals', sc.getAnimals);

app.get('/api/animals/:id', sc.getAnimalsById);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
