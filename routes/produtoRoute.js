import AuthMiddleware from "../middleware/authMiddleware.js";
import ProdutoController from "../controllers/produtoController.js";
import express from "express";

const produtoRouter = express.Router();
const ctrl = new ProdutoController();
const auth = new AuthMiddleware();

produtoRouter.post("/", auth.verificarToken, (req, res) => {
  // #swagger.tags = ['Produto']
  // #swagger.summary = 'Cadastra um produto'

  /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/produto'
                    }
                }
            }
        }
    */


        /*
        #swagger.security = [{
            "bearerAuth": []
        }]
    */
  ctrl.cadastrarProduto(req, res);
});

produtoRouter.get("/", auth.verificarToken, (req, res) => {
  // #swagger.tags = ['Produto']
  // #swagger.summary = 'Lista todos os produtos'

  /*
        #swagger.responses[404] = {
            description: "Nenhum produto para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */


        /*
        #swagger.security = [{
            "bearerAuth": []
        }]
    */
  ctrl.listarProdutos(req, res);
});

produtoRouter.get("/produtosVendidos", auth.verificarToken, (req, res) => {
  // #swagger.tags = ['Produto']
  // #swagger.summary = 'Lista os produtos que foram vendidos'
    /*
        #swagger.responses[404] = {
            description: "Nenhum produto para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    * /



    /*
        #swagger.security = [{
            "bearerAuth": []
        }]
    */
  ctrl.listarProdutosVendidos(req, res);
});

produtoRouter.get("/precoMaior", auth.verificarToken, (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.summary = 'Lista primeiro os produtos de maior preço'
    
    /*
        #swagger.responses[404] = {
            description: "Nenhum produto para comparar o preço"
            schema: {$ref: '#/components/schemas/erro'}
        }
    */

    /* 
        #swagger.security = [{
            "bearerAuth": []
        }]
    */
    ctrl.listarProdutosVendidos(req, res);
})

export default produtoRouter;
