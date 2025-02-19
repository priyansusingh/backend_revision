const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

mongoose.connect("mongodb://localhost:27017/authDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));
  
  app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
  });