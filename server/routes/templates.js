const express = require("express");
const Template = require("../models/Template");

const router = express.Router();

// GET all templates
router.get("/", async (req, res) => {
  try {
    const templates = await Template.find();
    res.json(templates);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET single template
router.get("/:id", async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ message: "Template not found" });
    }
    res.json(template);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
