const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const authRouter = require("./routes/auth");
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");

const app = express();

dotenv.config();

app.use(cors());

app.use(bodyParser.json());

mongoose
  .connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

app.use("/user", authRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.get("/", async (req, res) => {
  try {
    res.send("Hello world");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(4000);
