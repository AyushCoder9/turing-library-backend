const express = require("express");
const prisma = require("@prisma/client");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

app.post("/books", async (req, res) => {
  const { title, summary, isbn, url } = req.body;
  await prisma.book.create({ title, summary, isbn, url });
  return res.status(201).json("successfully created");
});

app.get();
