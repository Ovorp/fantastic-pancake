const express = require('express');
const PORT = 5555;
const app = express();
// const data = require('./MOCK_DATA.json');
const { getAnimals, getAnimalsById } = require('./controller/getController');
const { deleteID } = require('./controller/deleteController');

app.get('/api/animals', getAnimals);

app.get('/api/animals/:id', getAnimalsById);

app.delete('/api/animals/:id', deleteID);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
