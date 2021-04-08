// the data set is an array of objects each object is {
//     id,
//     animal,
//     image,
//     longitude,
//     latitude,
//     url
// }
const data = require('../MOCK_DATA.json');
let id = data.length + 1;

function addAnimal(req, res) {
  const { animal, image, longitude, latitude, url } = req.body;

  data.push({ animal, image, longitude, latitude, url, id });

  id++;

  !req.body
    ? res.status(500).send('Please send a body with this post request')
    : res.status(200).json(data);
}

module.exports = {
  addAnimal,
};
