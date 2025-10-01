import ProdutosRepository from "../repositories/produtoRepository.js";
import ProdutosEntity from "../entities/produtos.js";

export default class ProdutosController {
  #pRepo;
  constructor() {
    this.#pRepo = new ProdutosRepository();
  }

  async cadastrarProduto(req, res) {
    try {
      let { nome, preco, desc } = req.body;
      if (nome && preco && desc) {
        let novoProduto = new ProdutosEntity(0, nome, preco, desc, false);
        if (await this.#pRepo.cadastrarProduto(novoProduto)) {
          return res.status(200).json({ msg: "Novo produto cadastrado" });
        } else {
          throw new Error("Nao foi possivel cadastrar o produto.");
        }
      } else {
        return res.status(400).json({ msg: "O produto tem dados invalidos." });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Erro ao processar a requisicao." });
    }
  }

  async listarProdutos(req, res) {
    try {
      let lista = await this.#pRepo.listarTodosProdutos();
      if (lista.length > 0) {
        return res.status(200).json(lista);
      } else {
        return res.status(404).json({ msg: "Nenhum produto para listar." });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao." });
    }
  }

  async listarProdutosVendidos(req, res) {
    try {
      let lista = await this.#pRepo.listarProdutosVendidos();
      if (lista.length > 0) {
        return res.status(200).json(lista);
      } else {
        return res.status(404).json({ msg: "Nenhum produto para listar." });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Nao foi possivel processar a requisicao." });
    }
  }
  
}
