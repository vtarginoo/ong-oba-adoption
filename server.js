const next = require("next");
const http = require("http");

const port = process.env.PORT || 3000;
// força produção, porque o build já foi feito
const dev = false;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log("Next.js rodando na porta " + port);
  });
});