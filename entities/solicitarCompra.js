import Base from "./base";

export default class SolicitarCompra extends Base {
    #soli_id;
    #soli_data;
    #soli_data_concluida; //data que a solicitação foi concluida
    #prod_id; //Produto que foi solicitado
    #vendedor_id; //Vendedor que atendeu a solicitação

    constructor(soli_id, soli_data, soli_data_concluida, prod_id, vendedor_id) {
        super();
        this.#soli_id = soli_id;
        this.soli_data = soli_data;
        this.#soli_data_concluida = soli_data_concluida;
        this.#prod_id = prod_id;
        this.#vendedor_id = vendedor_id;
    }

    //gettters
    get soli_id() {
        return this.#soli_id;
    }
    get soli_data() {
        return this.#soli_data;
    }
    get soli_data_concluida() {
        return this.#soli_data_concluida;
    }
    get prod_id() {
        return this.#prod_id;
    }
    get vendedor_id() {
        return this.#vendedor_id;
    }
    //setters
    set soli_id(id) {
        this.#soli_id = id;
    }
    set soli_data(data) {
        this.#soli_data = data;
    }
    set soli_data_concluida(data) {
        this.#soli_data_concluida = data;
    }
    set prod_id(id) {
        this.#prod_id = id;
    }
    set vendedor_id(id) {
        this.#vendedor_id = id;
    }
}
