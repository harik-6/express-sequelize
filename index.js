const express = require("express");
const { connectToDB } = require("./db");
const studentController = require("./Controllers/StudentController");
const bodyParser = require("body-parser");
const batchController = require("./Controllers/BatchController");

const app = express();

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port..${port}`);
  connectToDB();
});

app.use(bodyParser.json());
app.use("/student", studentController);
app.use("/batch", batchController);
