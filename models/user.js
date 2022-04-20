const db = require("../config/config");
const bcrypt = require("bcryptjs");

const User = {};

User.getAll = () => {
  const sql = `
    SELECT
        * 
    FROM
        users
    `;

  return db.manyOrNone(sql);
};

User.create = async (user) => {
  const hash = await bcrypt.hash(user.password, 10);

  const sql = `
  INSERT INTO
  users(
    email,
    name,
    lastname,
    phone,
    password,
    image,
    created_at,
    update_at
  )
  VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id
  `;
  return db.oneOrNone(sql, [
    user.email,
    user.name,
    user.lastname,
    user.phone,
    hash,
    user.image,
    new Date(),
    new Date(),
  ]);
};

module.exports = User;
