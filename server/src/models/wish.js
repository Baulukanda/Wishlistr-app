import mongoose from "mongoose";

const wishSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  link: String,
  comments: [
    {
      type: new mongoose.Schema(
        {
          text: {
            type: String,
            required: true,
          },
          author: String,
        },
        {
          timestamps: true,
        }
      ),
    }],
  author: String
}, 
  {timestamps: true}
);

const Wish = mongoose.model("Wish", wishSchema);

export default Wish;
