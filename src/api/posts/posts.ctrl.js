const { Post } = require("../../models/post");

exports.list = async (ctx) => {
  try {
    console.log("GET REQUEST to /posts detected");
    const posts = await Post.find().sort({ _id: -1 }).lean().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};

exports.write = async (ctx) => {
  console.log("POST REQUEST to /posts detected");
  console.log(ctx.request.body);
  const { title, body } = ctx.request.body;
  const post = new Post({
    title,
    body,
  });
  try {
    await post.save().then((savedPost) => {
      console.log(savedPost);
      ctx.body = "save post";
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

exports.read = async (ctx) => {
  console.log("GET REQUEST to /posts/:id detected");
  console.log(`id : ${ctx.params.id}`);
  const { id } = ctx.params;
  try {
    const post = await Post.find({ _id: id }).lean().exec();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
