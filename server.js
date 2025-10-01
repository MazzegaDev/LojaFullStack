import express from "express";
import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swaggerOutput.json");

import authRoute from "./routes/authRoute.js";
import produtoRoute from "./routes/produtoRoute.js";
import vendaRoute from "./routes/vendaRoute.js";
import vendedorRoute from "./routes/vendedorRoute.js";
import perfilRouter from "./routes/perfilRoute.js";

const server = express();
server.use(express.json());

server.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));
server.use("/auth", authRoute);
server.use("/produto", produtoRoute);
server.use("/venda", vendaRoute);
server.use("/vendedor", vendedorRoute);
server.use("/perfil", perfilRouter);

server.listen(3000, () => {
  console.log("http://localhost:3000/docs");
});
