const express = require("express");
const auth = require("../middleware/auth");
const User = require("../models/user");

const router = express.Router();

router.post("/:templateId", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user.favorites.includes(req.params.templateId)) {
      user.favorites.push(req.params.templateId);
      await user.save();
    }

    res.json({ message: "Favorite added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("favorites");
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
