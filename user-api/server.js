const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json()); // Middleware to parse JSON
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (ensure you have .env with MONGO_URI)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Import and use routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
