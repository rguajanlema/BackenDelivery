const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const logger = require("morgan");
const cors = require("cors");
const res = require("express/lib/response");

const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.disable("x-powered-by");

app.set(`port`, port);

server.listen(3000, "127.0.0.1" || "localhost", function () {
  console.log("Aplication de NodeJS " + process.pid + " Inicianda...");
});

app.get("/", (req, res) => {
  res.send("Ruta raiz del backend");
});

app.get("/test", (req, res) => {
  res.send("Ruta es ka ruta TEST");
});

//ERROR HANDLER
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});
