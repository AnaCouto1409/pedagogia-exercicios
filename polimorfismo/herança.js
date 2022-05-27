set cliente(novoValor){
    if(novoValor instanceof  cliente){
        this._cliente = novoValor;
    }
}
get cliente(){
    return this._cliente;
}

get saldo(){
    return this._saldo;
}
sacar (valor){
    let= taxa= 1
    if(this._tipo == "corrente"){
        taxa = 1.1;
    }
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
        (this._saldo -= valorSacado);
        return valorSacado
    }
}


































