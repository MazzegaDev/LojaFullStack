import PerfilRepository from "../repositories/perfilRepository.js";
import PerfilEntity from "../entities/perfil.js";

export default class PerfilController {
  #pRepo;
  constructor() {
    this.#pRepo = new PerfilRepository();
  }

  async CriarPerfil(req, res) {
    try {
      let { desc, adm } = req.body;
      if (desc && (adm === 0 || adm === 1)) {
          let novoPerfil = new PerfilEntity(0, desc, adm);
          if (await this.#pRepo.CriarPerfil(novoPerfil)) {
            return res.status(200).json({ msg: "Novo perfil criado" });
          } else {
            throw new Error("Nao foi possivel criar o perfil.");
          }
      } else {
         return res.status(400).json({
            msg: "Codigo invalido, deve ser 1 para perfil de ADM ou 0 para perfil padrao!",
          });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }

  async ListarTodosPerfis(req, res) {
    try {
      let lista = await this.#pRepo.ListarPerfil();
      if (lista.length > 0) {
        return res.status(200).json(lista);
      } else {
        return res.status(404).json({ msg: "Nenhum perfil cadastrado" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao." });
    }
  }

  async ListarPerfisADM(req, res) {
    try {
      let lista = await this.#pRepo.ListarADM();
      if (lista.length > 0) {
        return res.status(200).json(lista);
      } else {
        return res
          .status(404)
          .json({ msg: "Nenhum perfil de ADM cadastrado." });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao." });
    }
  }

  async RevogarPermissao(req, res) {
    try {
      let { id } = req.params;
      if (await this.#pRepo.PerfilId(id)) {
        if (await this.#pRepo.VerificarADM(id)) {
          if (await this.#pRepo.RevogarPermissao(id)) {
            return res
              .status(200)
              .json({ msg: "Permissao revogada com sucesso" });
          } else {
            throw new Error("Nao foi possivel revogar a permissao.");
          }
        } else {
          return res
            .status(400)
            .json({ msg: "O perfil informado nao e um ADM no sistema." });
        }
      } else {
        return res
          .status(404)
          .json({ msg: "O id informado nao pertence a nenhum perfil." });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao" });
    }
  }
}
