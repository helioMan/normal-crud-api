const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require('./routes/product.route')
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/products", productRoute)

app.get("/", (req, res) => {
  res.send("Hey from api bazooka");
});


mongoose
  .connect(
    "mongodb+srv://aadisingh964:Mongodb99@cluster0.lp0yafv.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
