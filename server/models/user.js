const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Template",
    },
  ],
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
