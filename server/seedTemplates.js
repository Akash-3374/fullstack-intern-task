require("dotenv").config();
const mongoose = require("mongoose");
const Template = require("./models/Template");

mongoose.connect(process.env.MONGO_URI);

const templates = [
  {
    name: "Clean Code",
    description: "A handbook of agile software craftsmanship focusing on writing readable and maintainable code.",
    thumbnail_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    category: "Programming",
  },
  {
    name: "Design Patterns",
    description: "Classic book explaining reusable object-oriented software design patterns.",
    thumbnail_url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    category: "Software Engineering",
  },
  {
    name: "Atomic Habits",
    description: "A practical guide to building good habits and breaking bad ones.",
    thumbnail_url: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    category: "Self Improvement",
  },
  {
    name: "Deep Work",
    description: "Rules for focused success in a distracted world.",
    thumbnail_url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    category: "Productivity",
  },
  {
    name: "The Lean Startup",
    description: "How today’s entrepreneurs use continuous innovation to create successful businesses.",
    thumbnail_url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    category: "Business",
  }
]


async function seed() {
  await Template.deleteMany();
  await Template.insertMany(templates);
  console.log("Templates seeded ✅");
  process.exit();
}

seed();
