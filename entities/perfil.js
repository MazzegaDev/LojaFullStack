import Base from "./base.js";

export default class PerfilEntity{
    #per_id;
    #per_desc;
    #per_adm // true/false

    constructor(id, desc, value){
        this.#per_id = id;
        this.#per_desc = desc;
        this.#per_adm = value;
    }

    get per_id(){
        return this.#per_id;
    }
    get per_desc(){
        return this.#per_desc;
    }
    get per_adm(){
        return this.#per_adm;
    }

    set per_id(id){
        this.#per_id = id
    }
    set per_desc(desc){
        this.#per_desc = desc;
    }
    set per_adm(value){
        this.#per_adm = value;
    }

}