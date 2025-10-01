import AuthMiddleware from "../middleware/authMiddleware.js";
import VendedorRepository from "../repositories/vendedorRepository.js";

export default class AuthController {
  #vRepo;
  constructor() {
    this.#vRepo = new VendedorRepository();
  }
  async criarToken(req, res) {
    try {
      let { email, nome } = req.body;

      if (email && nome) {
        const vendedor = await this.#vRepo.validarVendedor(email, nome);

        if (vendedor) {
          let auth = new AuthMiddleware();
          let token = auth.gerarToken(
            vendedor.vendedor_id,
            vendedor.vendedor_nome,
            vendedor.vendedor_email
          );
          return res.status(200).json(token);
        } else {
          return res.status(404).json({ msg: "Vendedor nao encontrado" });
        }
      } else {
        return res
          .status(400)
          .json({ msg: "Nome ou email do vendedor sao invalidos." });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Erro ao gerar token de acesso" });
    }
  }
}
