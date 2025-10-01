import Base from "./base.js";

export default class extends Base {
  #itensv_id;
  #itensv_vtotal;
  #itensv_quant;
  #prod_id;
  #venda_id;

  constructor(itensv_id, itensv_vtotal, itensv_quant, prod_id, venda_id) {
    super();
    this.#itensv_id = itensv_id;
    this.#itensv_vtotal = itensv_vtotal;
    this.#itensv_quant = itensv_quant;
    this.#prod_id = prod_id;
    this.#venda_id = venda_id;
  }

  //getter
  get itensv_id() {
    return this.#itensv_id;
  }
  get itensv_vtotal() {
    return this.#itensv_vtotal;
  }
  get itensv_quant() {
    return this.#itensv_quant;
  }
  get prod_id() {
    return this.#prod_id;
  }
  get venda_id() {
    return this.#venda_id;
  }

  //setter
  set itensv_id(id) {
    this.#itensv_id = id;
  }
  set itensv_vtotal(total) {
    this.#itensv_vtotal = total;
  }
  set itensv_quant(quant) {
    this.#itensv_quant = quant;
  }
  set prod_id(id) {
    this.#prod_id = id;
  }
  set venda_id(id) {
    this.#venda_id = id;
  }
}
