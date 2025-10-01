import PerfilEntity from "../entities/perfil.js";
import DataBase from "../db/database.js";

export default class PerfilRepository {
  #banco;
  constructor() {
    this.#banco = new DataBase();
  }

  async CriarPerfil(novoPerfil) {
    const sql = "insert into tb_perfil (per_desc, per_adm) values (?, ?)";
    const values = [novoPerfil.per_id, novoPerfil.per_adm];

    const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

    return result;
  }

  async ListarPerfil() {
    const sql = "select * from tb_perfil";
    const rows = await this.#banco.ExecutaComando(sql);
    let perfil = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      perfil.push(this.toMap(row));
    }
    return perfil;
  }

  async RevogarPermissao(id) {
    const sql = "update tb_perfil set per_adm = 0 where per_id = ?";
    const values = [id];

    const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

    return result;
  }

  async ListarADM() {
    const sql = "select * from tb_perfil where per_adm = 1";
    const rows = await this.#banco.ExecutaComando(sql);
    let perfil = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      perfil.push(this.toMap(row));
    }
    return perfil;
  }

  async VerificarADM(id) {
    const sql = "select * from tb_perfil where per_adm = 1 and per_id = ?";

    const values = [id];

    const rows = await this.#banco.ExecutaComando(sql, values);

    if (rows.length > 0) {
      const row = rows[0];
      let perfil = this.toMap(row);
      return perfil;
    }
    return null;
  }

  async PerfilId(id) {
    const sql = "select * from tb_perfil where per_id = ?";

    const values = [id];

    const rows = await this.#banco.ExecutaComando(sql, values);

    if (rows.length > 0) {
      const row = rows[0];
      let perfil = this.toMap(row);
      return perfil;
    }
    return null;
  }

  toMap(row) {
    let perfil = new PerfilEntity();
    perfil.per_id = row["per_id"];
    perfil.per_desc = row["per_desc"];
    perfil.per_adm = row["per_adm"];
    return perfil;
  }
}
