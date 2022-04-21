const UserController = require("../controllers/usersController");

module.exports = (app) => {
  //TRAER DATOS
  app.get("/api/users/getAll", UserController.getAll);

  //GUARDAR DATOS
  app.post("/api/users/create", UserController.register);
  app.post("/api/users/login", UserController.login);
};
