const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// app.js
// const express = require("express");
// const app = express();
// const mealsController = require("./controllers/mealsController");
// const path = require("path");

app.set("view engine", "pug");
app.set("views", path.resolve("./src/views"));

app.get("/menu", mealsController.getMenuController);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});