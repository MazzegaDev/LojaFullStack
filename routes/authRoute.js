import authController from "../controllers/authController.js";
import express from "express";

const authRouter = express.Router();
const ctrl = new authController();

authRouter.post("/", (req, res)=>{
    // #swagger.tags = ['Autenticação']
    // #swagger.summary = 'Autentifica um vendedor cadastrado'


    
    ctrl.criarToken(req, res);
})

export default authRouter;