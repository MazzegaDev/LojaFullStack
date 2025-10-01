import Base from "./base.js";

export default class VendedorEntity  extends Base{
    #vendedor_id;
    #vendedor_nome;
    #vendedor_email;
    #ven_ativo;

    constructor(vendedor_id, vendedor_nome, vendedor_email, ven_ativo){
        super();
        this.#vendedor_id = vendedor_id;
        this.#vendedor_nome = vendedor_nome;
        this.#vendedor_email = vendedor_email;
        this.#ven_ativo = ven_ativo;
    
    }

    //getter
    get vendedor_id(){
        return this.#vendedor_id;
    }
    get vendedor_nome(){
        return this.#vendedor_nome;
    }
    get vendedor_email(){
        return this.#vendedor_email;
    }
    get ven_ativo(){
        return this.#ven_ativo;
    }
    //setter
    set vendedor_id(id){
        this.#vendedor_id = id;
    }
    set vendedor_nome(nome){
        this.#vendedor_nome = nome; 
    }
    set vendedor_email(email){
        this.#vendedor_email = email;
    }
    set ven_ativo(ativo){
        this.#ven_ativo = ativo;
    }
}