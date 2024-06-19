const userModel = require('../models/user');

exports.getAllUsers = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};
exports.index= 

// exports.getUserById = async (req, res) => {
//   const id = req.params.id;
//   const user = await userModel.getUserById(id);
//   res.json(user);
// };