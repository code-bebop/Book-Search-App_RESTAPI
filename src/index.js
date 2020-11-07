require("dotenv").config();

const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");

const api = require("./api");

const app = new Koa();
const router = new Router();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO DB CONNECT");
  });

router.use("/api", api.routes());

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT, () => {
  console.log("server running on localhost:4000");
});
