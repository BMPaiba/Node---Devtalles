const users = [
  {
    id: 1,
    name: "padevian",
  },
  {
    id: 2,
    name: "padevian2",
  },
  {
    id: 3,
    name: "padevian3",
  },
];

function getUserById(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    return callback(`USUARIO NO ENCONTRADO CON EL ID ${id}`);
  }
  return callback(null, user);
}


module.exports = { getUserById }