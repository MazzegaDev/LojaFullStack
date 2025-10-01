import VendedorEntity from "../entities/vendedor.js";
import PerfilEntity from "../entities/perfil.js";
import database from "../db/database.js";

export default class VendedorRepository {
  #banco;
  constructor() {
    this.#banco = new database();
  }

  async cadastrarVendedor(novoVendedor) {
    const sql =
      "insert into tb_vendedor (vendedor_nome, vendedor_email, per_id) values (?, ?, ?)";
    const values = [
      novoVendedor.vendedor_nome,
      novoVendedor.vendedor_email,
      novoVendedor.per_id.per_id,
    ];

    const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

    return result;
  }

  async listarVendedores() {
    const sql =
      "select * from tb_vendedor V inner join tb_perfil P on V.per_id = P.per_id where V.ven_ativo = 1 ";
    const rows = await this.#banco.ExecutaComando(sql);
    let vendedores = [];
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      vendedores.push(this.toMap(row));
    }
    return vendedores;
  }

  async desativarVendedor(vendedor_id) {
    const sql = "update tb_vendedor set ven_ativo = 0 where vendedor_id = ?";
    const values = [vendedor_id];

    const result = await this.#banco.ExecutaComandoNonQuery(sql, values);
    return result;
  }

  async procurarVendedor(vendedor_id) {
    const sql = "select * from tb_vendedor where vendedor_id = ?";
    const values = [vendedor_id];
    const rows = await this.#banco.ExecutaComando(sql, values);

    if (rows.length > 0) {
      let row = rows[0];
      let vendedor = this.toMap(row);

      return vendedor;
    }
    return null;
  }

  async validarVendedor(vendedor_email, vendedor_nome) {
    const sql =
      "select * from tb_vendedor where vendedor_email = ? and vendedor_nome = ?";
    const values = [vendedor_email, vendedor_nome];
    const rows = await this.#banco.ExecutaComando(sql, values);

    if (rows.length > 0) {
      let row = rows[0];
      let vendedor = this.toMap(row);

      return vendedor;
    }
    return null;
  }

  async validarADM(vendedor_id){
    const sql =
      "select * from tb_vendedor V inner join tb_perfil P on V.per_id = P.per_id where V.vendedor_id = ?";
    const values = [vendedor_id];
    const rows = await this.#banco.ExecutaComando(sql, values);

    if (rows.length > 0) {
      let row = rows[0];
      let vendedor = this.toMap(row);

      return vendedor;
    }
    return null;
  }

  toMap(row) {
    let vendedor = new VendedorEntity();
    vendedor.vendedor_id = row["vendedor_id"];
    vendedor.vendedor_nome = row["vendedor_nome"];
    vendedor.vendedor_email = row["vendedor_email"];
    vendedor.ven_ativo = row["ven_ativo"];

    vendedor.per_id = new PerfilEntity();
    vendedor.per_id.per_desc = row["per_desc"];
    vendedor.per_id.per_adm = row["per_adm"];
    return vendedor;
  }

}
