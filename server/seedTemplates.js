require("dotenv").config();
const mongoose = require("mongoose");
const Template = require("./models/Template");

mongoose.connect(process.env.MONGO_URI);

const templates = [
  {
    name: "Startup Landing Page",
    description: "Clean landing page for startups",
    thumbnail_url: "https://via.placeholder.com/300",
    category: "Landing",
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio template",
    thumbnail_url: "https://via.placeholder.com/300",
    category: "Portfolio",
  },
  {
    name: "E-commerce UI",
    description: "Modern shop UI template",
    thumbnail_url: "https://via.placeholder.com/300",
    category: "Ecommerce",
  },
  {
    name: "SaaS Dashboard",
    description: "Dashboard layout for SaaS apps",
    thumbnail_url: "https://via.placeholder.com/300",
    category: "Dashboard",
  },
  {
    name: "Blog Template",
    description: "Minimal blog layout",
    thumbnail_url: "https://via.placeholder.com/300",
    category: "Blog",
  },
];

async function seed() {
  await Template.deleteMany();
  await Template.insertMany(templates);
  console.log("Templates seeded ✅");
  process.exit();
}

seed();
