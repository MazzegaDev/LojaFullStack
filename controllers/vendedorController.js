import VendedorEntity from "../entities/vendedor.js";
import PerfilEntity from "../entities/perfil.js";
import VendedorRepository from "../repositories/vendedorRepository.js";
import PerfilRepository from "../repositories/perfilRepository.js";

export default class VendedorController {
  #vRepo;
  #pRepo;
  constructor() {
    this.#vRepo = new VendedorRepository();
    this.#pRepo = new PerfilRepository();
  }

  async cadastrarVendedor(req, res) {
    try {
      let { nome, email, per_id } = req.body;
      if (nome && email && per_id && per_id.id) {
        if(await this.#pRepo.PerfilId(per_id.id)){
          let novoVendedor = new VendedorEntity(0, nome, email, true, new PerfilEntity(per_id.id));
          if (await this.#vRepo.cadastrarVendedor(novoVendedor)) {
          return res.status(200).json({ msg: "Novo vendedor cadastrado" });
        } else {
          throw new Error("Nao foi possivel cadastrar o vendedor");
        }
        }else{
          return res.status(404).json({msg: "Esse ID nao pertence a nenhum perfil."});
        }
        
      } else {
        return res
          .status(400)
          .json({ msg: "Informe um nome e email validos." });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Erro ao processar a requisicao" });
    }
  }

  async listarVendedores(req, res) {
    try {
      let lista = await this.#vRepo.listarVendedores();
      if (lista.length > 0) {
        return res.status(200).json(lista);
      } else {
        return res.status(404).json({ msg: "Nao ha nenhum funcionario ativo" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Erro ao processar a requisicao" });
    }
  }

  async desativarVendedor(req, res) {
    try {
      let { id } = req.params;
      if (await this.#vRepo.procurarVendedor(id)) {
        if (await this.#vRepo.desativarVendedor(id)) {
          return res.status(200).json({ msg: "Vendedor desativado" });
        } else {
          throw new Error("Nao foi possivel desativar o vendedor");
        }
      } else {
        return res.status(404).json({ msg: "Vendedor nao encontrado." });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }

  
}
