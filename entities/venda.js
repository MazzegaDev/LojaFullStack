import Base from "./base.js";

export default class VendaEntity extends Base{
    #venda_id;
    #venda_data;
    #vendedor_id;
    

    constructor(venda_id, venda_data, vendedor_id){
        super();
        this.#venda_id = venda_id;
        this.#venda_data = venda_data;
        this.#vendedor_id = vendedor_id;
    }

    //getter
    get venda_id(){
        return this.#venda_id;
    }
    get venda_data(){
        return this.#venda_data;
    }
    get vendedor_id(){
        return this.#vendedor_id;
    }
    
    //setter
    set venda_id(id){
        this.#venda_id = id;
    }
    set venda_data(data){
        this.#venda_data = data; 
    }
    set vendedor_id(id){
        this.#vendedor_id = id;
    }
}