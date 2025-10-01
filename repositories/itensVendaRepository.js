import ItensVendaEntity from "../entities/itensVenda.js";
import ProdutosEntity from "../entities/produtos.js";
import VendaEntity from "../entities/venda.js";

import database from "../db/database.js";

export default class ItensVendaRepository {
  #banco;
  set banco(value){this.#banco = value;}
  constructor() {
    this.#banco = new database();
  }

  async criarItensVenda(itensVenda){
    const sql = "insert into tb_itensvenda (itensv_vtotal, itensv_quant, prod_id, venda_id) values (?, ?, ?, ?)";
    const values = [itensVenda.itensv_vtotal, itensVenda.itensv_quant, itensVenda.prod_id.prod_id, itensVenda.venda_id];

    const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

    return result;
  }

  async listarItensVenda(){
    const sql = "select * from tb_itensvenda IV inner join tb_produtos PR on IV.prod_id = PR.prod_id inner join tb_venda V on IV.venda_id = V.venda_id";
    const rows = await this.#banco.ExecutaComando(sql);
    let itensVenda = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        itensVenda.push(this.toMap(row));
    }
    return itensVenda;
  }

  toMap(row){
    //itensvenda
    let itensVenda = new ItensVendaEntity();
    itensVenda.itensv_id = row["itensv_id"];
    itensVenda.itensv_vtotal = row["itensv_vtotal"];
    itensVenda.itensv_quant = row["itens_quant"];
    //Prod
    itensVenda.prod_id = new ProdutosEntity();
    itensVenda.prod_id.prod_id = row["prod_id"];
    itensVenda.prod_id.prod_nome = row["prod_nome"];
    itensVenda.prod_id.prod_preco = row["prod_preco"];
    //Venda
    itensVenda.venda_id = new VendaEntity();
    itensVenda.venda_id.venda_id = row["venda_id"];
    itensVenda.venda_id.venda_data = row["venda_data"];
    
    return itensVenda;
  }
}
