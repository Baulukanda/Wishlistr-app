import mongoose from "mongoose";

const wishSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  link: String,
  creationDate: { type: Date, default: Date.now },
  comments: [String],
  author: String
});

const Wish = mongoose.model("Wish", wishSchema);

export default Wish;
