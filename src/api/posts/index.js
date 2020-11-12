const Router = require("koa-router");
const posts = new Router();

const postsCtrl = require("./posts.ctrl");

posts.get("/", postsCtrl.list);
posts.post("/", postsCtrl.write);
posts.get("/:id", postsCtrl.read);

module.exports = posts;
