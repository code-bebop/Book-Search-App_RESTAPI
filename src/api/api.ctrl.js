const { Post } = require("../models/post");

exports.list = async (ctx) => {
  try {
    const posts = await Post.find().sort({ _id: -1 }).lean().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};

exports.write = async (ctx) => {
  const { title, body } = ctx.request.body;
  const post = new Post({
    title,
    body,
  });
  try {
    await post.save().then((savedPost) => {
      console.log(savedPost);
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};
