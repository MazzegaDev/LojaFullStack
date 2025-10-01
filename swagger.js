import swaggerAutogen from "swagger-autogen";

const doc = {
  host: "localhost:3000",
  info: {
    title: "API REST Loja",
    description: "API REST do backend de uma loja ficticia",
  },
  components: {
    schemas: {
      erro: {
        msg: "Ocorreu um erro",
      },
      produto: {
        nome: "RX 7600",
        preco: 1799,
        desc: "Placa de video",
      },
      venda: {
        quantidade: 1,
        prod_id: {
          id: 1,
        },
      },
      perfil: {
        desc: "ADM = per_adm 1 Usuario = per_adm 0",
        per_adm: 1,
      },
      vendedor: {
        email: "mazzegaloja@gmail.com",
        nome: "Mazzega",
        per_id: {
          id: "0"
        }
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
};
const routes = ["./server.js"];
const outputJson = "./swaggerOutput.json";
swaggerAutogen({ openapi: "3.0.0" })(outputJson, routes, doc).then(async () => {
  await import("./server.js");
});
