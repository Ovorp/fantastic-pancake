// the data set is an array of objects each object is {
//     id,
//     animal,
//     image,
//     longitude,
//     latitude,
//     url
// }
const data = require('../MOCK_DATA.json');
let id = data.length;
// this might not be needed
data.forEach((val) => {
  if (val.id >= id) {
    id = val.id + 1;
  }
});
console.log(id);
