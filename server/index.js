const express = require('express');
const PORT = 5555;
const app = express();
// const data = require('./MOCK_DATA.json');
const sc = require('./controller/getController');
const { deleteID } = require('./controller/testController');

app.get('/api/animals', sc.getAnimals);

app.get('/api/animals/:id', sc.getAnimalsById);

app.delete('/api/animals/:id', deleteID);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
