const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  body: String,
  bookInfo: {
    title: String,
    price: String,
    author: String,
    publisher: String,
    image: String,
  },
  publishedDate: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = {
  Post,
};
