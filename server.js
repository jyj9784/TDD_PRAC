const express = require("express");
const productRoutes = require("./routes");
const PORT = 5000;
const mongoose = require("mongoose");


mongoose
  .connect(
    "mongodb+srv://test:sparta@cluster0.7o347.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("mongoDB CONNECTED"))
  .catch((err) => console.log(err));

  
const app = express();
app.use(express.json());
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("WELCOME TDD WORLD");
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message })
})

app.listen(PORT);
console.log(`running! ${PORT}`);

module.exports = app;