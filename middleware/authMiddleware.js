import jwt from "jsonwebtoken";
import VendedorRepository from "../repositories/vendedorRepository.js";
const secret = "MAZZ574";

export default class AuthMiddleware{
    gerarToken(id, nome, email){
        let jwtToken = jwt.sign(
            {
                id: id,
                nome: nome,
                email: email,
            },
            secret,
            {
                expiresIn: 5000
            }
        )
        return jwtToken;
    }


    async verificarToken(req, res, next){
        if(req.headers.authorization){
            let token = req.headers.authorization.split(" ")[1];
            try {
                let payload = jwt.verify(token, secret);
                let vRepo = new VendedorRepository();
                let vendedor = await vRepo.procurarVendedor(payload.id);
                if(vendedor){
                    if(vendedor.ven_ativo){
                        req.VendedorLogado = vendedor.vendedor_id;
                        next();
                    }else{
                        return res.status(401).json({msg: "Vendedor inativo"})
                    }
                }else{
                    return res.status(404).json({msg: "Vendedor nao encontrado"})
                }
            } catch (error) {
                console.log(error);
                return res.status(401).json({msg: "Token invalido"})
            }
        }else{
            return res.status(401).json({msg: "Token nao encontrado!"});
        }
    }
}

