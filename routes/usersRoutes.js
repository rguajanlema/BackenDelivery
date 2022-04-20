const UserController = require("../controllers/usersController");

module.exports = (app) => {
  app.get("/api/users/getAll", UserController.getAll);
};
