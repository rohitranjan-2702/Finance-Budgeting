const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middlewares/errorMiddleware");
const connection = require("./database/db");
require("dotenv").config();
const expenseRoute = require("./routes/expenseRoute");
const userRoute = require("./routes/userRoute");

const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("hello!!!!");
});

app.use("/expense", expenseRoute);
app.use("/users", userRoute);

app.use(errorMiddleware);

connection();

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
