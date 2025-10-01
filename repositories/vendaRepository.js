
import Database from "../db/database.js";

export default class VendaRepository {
  #banco;
  set banco(value){this.#banco = value;}
  constructor() {
    this.#banco = new Database();
  }

  async criarVenda(novaVenda) {
    const sql = "insert into tb_venda (venda_data, vendedor_id) values (?,?)";
    const values = [novaVenda.venda_data ,novaVenda.vendedor_id];

    const result = await this.#banco.ExecutaComandoLastInserted(sql, values);

    return result;
  }
}
