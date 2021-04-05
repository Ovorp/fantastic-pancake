// the data set is an array of objects each object is {
//     id,
//     animal,
//     image,
//     longitude,
//     latitude,
//     url
// }
const data = require('../MOCK_DATA.json');

function getAnimals(req, res) {
  let { animal } = req.query;
  console.log(animal);
  if (animal) {
    let animalData = data.filter(
      (val) => val.animal.toLowerCase() === animal.toLowerCase()
    );
    res.status(200).json(animalData);
  } else res.status(200).json(data);
}

function getAnimalsById(req, res) {
  let { id } = req.params;
  let idData = data.filter((val) => val.id == id);
  if (!idData) {
    return res.status(404).send('Id does not exist');
  }
  res.status(200).json(idData);
}

module.exports = {
  getAnimals,
  getAnimalsById,
};
