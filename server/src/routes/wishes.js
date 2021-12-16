import express from "express";
import Wish from "../models/wish.js";

const wishRoutes = express.Router();

//Wishes
wishRoutes.get("/", async (req, res) => {
  const wishes = await Wish.find();
  res.json(wishes);
});

wishRoutes.post("/", async (req, res) => {
  try {
    const wish = await Wish.create(req.body);
    res.status(201);
    res.json(wish);
  } catch (error) {
    res.status(500);
    res.json({
      error: "Wish could not be created",
      details: error.toString(),
    });
  }
});

wishRoutes.get("/:id", async (req, res) => {
  try {
    const wish = await Wish.findById(req.params.id);
    if (wish) {
      res.json(wish);
    } else {
      res.status(404);
      res.json({ error: "wish not found" });
    }
  } catch (error) {
    res.status(500);
    res.json({ error: "Something went wrong", details: error.toString() });
  }
});

// wishes
wishRoutes.put("/:id/comments", async (req, res) => {
  try {
    const comment = await req.body
    const wish = await Wish.findByIdAndUpdate(req.params.id, { $push: { comments: comment } }, { returnDocument: `after` });
    res.json(wish)
  } catch (error) {
    res.status(500);
    res.json({ error: "wish could not be updated", details: error.toString() });
  }
});

export default wishRoutes;
