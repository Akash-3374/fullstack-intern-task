require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

// 🔹 ROUTES (ADD THESE)
const authRoutes = require("./routes/auth");
const templateRoutes = require("./routes/templates");

app.use("/api/auth", authRoutes);
app.use("/api/templates", templateRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error("MongoDB connection error ❌", err));

  
const favoriteRoutes = require("./routes/favorites");
app.use("/api/favorites", favoriteRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Mini SaaS Template Store Backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
