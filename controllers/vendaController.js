import VendaEntity from "../entities/venda.js";
import VendaRepository from "../repositories/vendaRepository.js";

import ProdutosEntity from "../entities/produtos.js";
import ProdutosRepository from "../repositories/produtoRepository.js";

import ItensVendaEntity from "../entities/itensVenda.js";
import ItensVendaRepository from "../repositories/itensVendaRepository.js";

import Database from "../db/database.js";
/*
    1 - criar a venda
    2 - criar o itens da venda

*/
export default class VendaController {
  #vRepo;
  #pRepo;
  #iRepo;
  #banco;
  constructor() {
    this.#vRepo = new VendaRepository();
    this.#pRepo = new ProdutosRepository();
    this.#iRepo = new ItensVendaRepository();
    this.#banco = new Database();
  }
  async vender(req, res) {
    try {
      let { quantidade, prod_id } = req.body;
      if (quantidade && prod_id.id) {
        //Certo
        let produto = await this.#pRepo.procuraProduto(prod_id.id);
        if (produto) {
          //Achou o produto
          if (await this.#pRepo.verificaDispo(produto.prod_id)) {
            //Esta disponivel para venda e inicia trasacao
            await this.#banco.AbreTransacao();
            let dataVenda = new Date().toISOString().split("T")[0];
            let vendedorID = req.VendedorLogado;
            let novaVenda = new VendaEntity(0, dataVenda, vendedorID);
            let vendaID = await this.#vRepo.criarVenda(novaVenda);
            if (vendaID) {
              //Criou a venda -> criar itens da venda
              let precoP = await this.#pRepo.pegaPreco(produto.prod_id);
              let vTotal = precoP * quantidade;
              let itensVenda = new ItensVendaEntity(
                0,
                vTotal,
                quantidade,
                new ProdutosEntity(produto.prod_id),
                vendaID,
                new ProdutosEntity(produto.prod_nome),
                new ProdutosEntity(produto.prod_preco),
                dataVenda
              );
              if (await this.#pRepo.marcarVendido(produto.prod_id)) {
                if (await this.#iRepo.criarItensVenda(itensVenda)) {
                  await this.#banco.Commit();
                  return res.status(200).json({ msg: "Venda criada." });
                } else {
                  throw new Error("Nao foi possivel concluir a venda.");
                }
              } else {
                throw new Error("Nao foi possivel dar baixa no produto");
              }
            } else {
              throw new Error("Nao foi possivel criar a venda");
            }
          } else {
            return res.status(400).json({ msg: "Esse produto ja foi vendido" });
          }
        } else {
          return res.status(404).json({ msg: "Produto nao encontrado" });
        }
      } else {
        return res.status(400).json({ msg: "A venda tem dados invalidos." });
      }
    } catch (error) {
      await this.#banco.Rollback();
      console.log(error);
      return res.status(500).json({ msg: "Erro ao processar a requisicao" });
    }
  }

  async listarVenda(req, res) {
    try {
      let lista = await this.#iRepo.listarItensVenda();
      if (lista.length > 0) {
        return res.status(200).json(lista);
      } else {
        return res.status(404).json({ msg: "Nenhuma venda para listar." });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Erro ao processar a requisissao." });
    }
  }
}
