import ProdutosEntity from "../entities/produtos.js";
import database from "../db/database.js";

export default class ProdutosRepository {
  #banco;
  constructor() {
    this.#banco = new database();
  }

  async cadastrarProduto(novoProduto) {
    const sql =
      "insert into tb_produtos (prod_nome, prod_preco, prod_desc) values (?, ?, ?)";
    const values = [
      novoProduto.prod_nome,
      novoProduto.prod_preco,
      novoProduto.prod_desc,
    ];

    const result = await this.#banco.ExecutaComandoNonQuery(sql, values);
    return result;
  }

  async listarTodosProdutos() {
    const sql = "select * from tb_produtos";
    const rows = await this.#banco.ExecutaComando(sql);
    let produtos = [];
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      produtos.push(this.toMap(row));
    }
    return produtos;
  }

  async listarProdutosVendidos() {
    const sql = "select * from tb_produtos where prod_vendido = 1";
    const rows = await this.#banco.ExecutaComando(sql);
    let produtos = [];
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      produtos.push(this.toMap(row));
    }
    return produtos;
  }

  async marcarVendido(prod_id) {
    const sql = "update tb_produtos set prod_vendido = 1 where prod_id = ?";
    const values = [prod_id];
    const result = await this.#banco.ExecutaComandoNonQuery(sql, values);
    return result;
  }

  async pegaPreco(prod_id) {
    const sql = "select prod_preco from tb_produtos where prod_id = ?";
    const values = [prod_id];
    const rows = await this.#banco.ExecutaComando(sql, values);
    if (rows.length > 0) {
      return rows[0].prod_preco;
    }
    return null;
  }

  async procuraProduto(prod_id) {
    const sql = "select * from tb_produtos where prod_id = ?";
    const values = [prod_id];
    const rows = await this.#banco.ExecutaComando(sql, values);
    if (rows.length > 0) {
      const row = rows[0];
      let produto = this.toMap(row);
      return produto;
    }
    return null;
  }

  async verificaDispo(prod_id) {
    const sql = "select * from tb_produtos where prod_id = ? and prod_vendido = 0";
    const values = [prod_id];
    const rows = await this.#banco.ExecutaComando(sql, values);
    if (rows.length > 0) {
      const row = rows[0];
      let produto = this.toMap(row);
      return produto;
    }
    return null;
  }

  toMap(row) {
    let produto = new ProdutosEntity();
    produto.prod_id = row["prod_id"];
    produto.prod_nome = row["prod_nome"];
    produto.prod_preco = row["prod_preco"];
    produto.prod_desc = row["prod_desc"];
    produto.prod_vendido = row["prod_vendido"];
    return produto;
  }
}
