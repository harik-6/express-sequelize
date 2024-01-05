const express = require("express");
const bodyParser = require("body-parser");
const { connectToDB } = require("./db");
const studentsRoutes = require("./Routes/student");
const batchRoutes = require("./Routes/batch");

const app = express();

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port..${port}`);
  connectToDB();
});

app.use(bodyParser.json());
app.use("/student", studentsRoutes);
app.use("/batch", batchRoutes);
