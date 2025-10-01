import AuthMiddleware from "../middleware/authMiddleware.js";
import vendedorController from "../controllers/vendedorController.js"
import express from "express";

const vendedorRouter = express.Router();
const ctrl = new vendedorController();
const auth = new AuthMiddleware();

vendedorRouter.post("/", auth.verificarToken, (req, res)=>{
    // #swagger.tags = ['Vendedor']
    // #swagger.summary = 'Cadastra um vendedor'

    /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/vendedor'
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
    ctrl.cadastrarVendedor(req, res);
})

vendedorRouter.patch("/:id", auth.verificarToken, (req, res)=>{
    // #swagger.tags = ['Vendedor']
    // #swagger.summary = 'Desativa um vendedor no sistema'


    /*
        #swagger.security = [{
            "bearerAuth": []
        }]
    */
    ctrl.desativarVendedor(req, res);
})

vendedorRouter.get("/", auth.verificarToken, (req, res)=>{
    // #swagger.tags = ['Vendedor']
    // #swagger.summary = 'Lista todos os vendedores'

    /*
        #swagger.responses[404] = {
            description: "Nenhum vendedor para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */


    /*
        #swagger.security = [{
            "bearerAuth": []
        }]
    */

    ctrl.listarVendedores(req, res);
})

export default vendedorRouter;