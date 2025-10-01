import AuthMiddleware from "../middleware/authMiddleware.js";
import vendaController from "../controllers/vendaController.js"
import express from "express";

const vendaRouter = express.Router();
const ctrl = new vendaController();
const auth = new AuthMiddleware();

vendaRouter.post("/", auth.verificarToken, (req, res)=>{
    // #swagger.tags = ['Venda']
    // #swagger.summary = 'Inicia o processo de venda de produto'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/venda'
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
    ctrl.vender(req, res);
})

vendaRouter.get("/", auth.verificarToken, (req, res)=>{
    // #swagger.tags = ['Venda']
    // #swagger.summary = 'Lista todas as vendas'

    /*
        #swagger.responses[404] = {
            description: "Nenhuma venda para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */


        /*
        #swagger.security = [{
            "bearerAuth": []
        }]
    */
    ctrl.listarVenda(req, res);
})


export default vendaRouter;