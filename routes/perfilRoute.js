import PerfilController from "../controllers/perfilController.js";
import AuthMiddleware from "../middleware/authMiddleware.js";
import express from "express";

const perfilRouter = express.Router();
const ctrl = new PerfilController();
const auth = new AuthMiddleware();

perfilRouter.post("/", auth.verificarTokenADM, (req, res) => {
  // #swagger.tags = ['Perfil']
  // #swagger.summary = 'Cadastra um novo perfil'

  /*
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/perfil'
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
  ctrl.CriarPerfil(req, res);
});

perfilRouter.get("/", auth.verificarTokenADM, (req, res) => {
  // #swagger.tags = ['Perfil']
  // #swagger.summary = 'Lista todos os perfis'

  /*
        #swagger.responses[404] = {
            description: "Nenhum perfil para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */

  /*
        #swagger.security = [{
            "bearerAuth": []
        }]
    */
  ctrl.ListarTodosPerfis(req, res);
});

perfilRouter.get("/ListarADMs", auth.verificarTokenADM, (req, res) => {
  // #swagger.tags = ['Perfil']
  // #swagger.summary = 'Lista apenas perfis de adm'

  /*
        #swagger.responses[404] = {
            description: "Nenhum perfil para listar",
            schema: {$ref: '#/components/schemas/erro'}
        }
    */

  /*
        #swagger.security = [{
            "bearerAuth": []
        }]
    */
  ctrl.ListarPerfisADM(req, res);
});

perfilRouter.patch("/:id", auth.verificarTokenADM, (req, res) => {
  // #swagger.tags = ['Perfil']
  // #swagger.summary = 'Revoga a permisao de um perfil'

  /*
        #swagger.security = [{
            "bearerAuth": []
        }]
    */
  ctrl.RevogarPermissao(req, res);
});

export default perfilRouter;
