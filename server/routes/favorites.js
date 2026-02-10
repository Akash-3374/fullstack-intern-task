const express = require("express");
const Favorite = require("../models/Favorite");
const auth = require("../middleware/auth");

const router = express.Router();

// Add to favorites
router.post("/:templateId", auth, async (req, res) => {
  try {
    const exists = await Favorite.findOne({
      user: req.userId,
      template: req.params.templateId,
    });

    if (exists) {
      return res.status(400).json({ message: "Already favorited" });
    }

    await Favorite.create({
  user: req.userId,
  template: req.params.templateId,
});


    res.json({ message: "Added to favorites" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get my favorites
router.get("/", auth, async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.userId }).populate(
      "template"
    );
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
