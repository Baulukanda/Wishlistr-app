import mongoose from "mongoose";

const wishSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  link: String,
  comment: [tring],
  dateCreated: Date
});

const Wish = mongoose.model("Wish", wishSchema);

export default Wish;
