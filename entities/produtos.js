import Base from "./base.js";

export default class ProdutosEntity extends Base{
    #prod_id;
    #prod_nome;
    #prod_preco;
    #prod_desc;
    #prod_vendido;

    constructor(prod_id, prod_nome, prod_preco, prod_desc, prod_vendido){
        super();
        this.#prod_id = prod_id;
        this.#prod_nome = prod_nome;
        this.#prod_preco = prod_preco;
        this.#prod_desc = prod_desc;
        this.#prod_vendido = prod_vendido;
    }

    //getter
    get prod_id(){
        return this.#prod_id;
    }
    get prod_nome(){
        return this.#prod_nome;
    }
    get prod_preco(){
        return this.#prod_preco;
    }
    get prod_desc(){
        return this.#prod_desc;
    }
    get prod_vendido(){
        return this.#prod_vendido;
    }
    //setter
    set prod_id(id){
        this.#prod_id = id;
    }
    set prod_nome(nome){
        this.#prod_nome = nome; 
    }
    set prod_preco(preco){
        this.#prod_preco = preco;
    }
    set prod_desc(desc){
        this.#prod_desc = desc;
    }
    set prod_vendido(vendido){
        this.#prod_vendido = vendido;
    } 
}