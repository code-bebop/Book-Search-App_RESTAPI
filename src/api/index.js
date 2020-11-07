const Router = require("koa-router");
const api = new Router();

const postCtrl = require("./api.ctrl");

api.get("/post", postCtrl.list);
api.post("/post", postCtrl.write);

module.exports = api;
