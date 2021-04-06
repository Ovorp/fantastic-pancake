const data = require('../MOCK_DATA.json');

function deleteID(req, res) {
  let { id } = req.params;
  data.forEach((val, i) => {
    if (val.id === +id) {
      return data.splice(i, 1);
    }
  });
  res.status(200).json(data);
}

module.exports = {
  deleteID,
};
