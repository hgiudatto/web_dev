const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (
    req.path.startsWith("/users") &&
    req.headers["authorization"] !== "Bearer abcd"
  ) {
    return res.status(401).json({ error: "Must pass bearer token abcd" });
  }

  next();
});
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
