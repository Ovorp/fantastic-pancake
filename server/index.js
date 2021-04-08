const express = require('express');
const PORT = 5555;
const app = express();
// const data = require('./MOCK_DATA.json');
const { getAnimals, getAnimalsById } = require('./controller/getController');
const { deleteID } = require('./controller/deleteController');
const { addAnimal } = require('./controller/postController');

// top level middleware

app.use(express.json());

// endpoints
const endpoint = '/api/animals';

app.get(endpoint, getAnimals);

app.get(`${endpoint}/:id`, getAnimalsById);

app.post(endpoint, addAnimal);

app.delete('/api/animals/:id', deleteID);

// running the app

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
