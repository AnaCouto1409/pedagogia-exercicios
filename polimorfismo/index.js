//fazer o export da conta corrente

export class contaPoupança{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
        sacar(valor) {
            if(this._saldo >= valor){
                this._saldo -= valor;
                return valor;
            }
        }
        depositar(valor){
            if(valor <= 100){
                return;
            }
            this._saldo += valor;
        }
        transferir(valor, conta){
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        }
    }
}

//import  {cliente} from "/.cliente.js";
//import  {contaCorrente}  from "/.contaPOupança.js";
//import {contaPoupança} from "/.contaPoupança.js";
//import {conta} from "./conta.js"

const cliente1 = new cliente("Ricardo", 11122233309);

const constCorrenteRicardo = new Conta (1001, cliente1);
constCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPOupança = new conta(50,, cliente1, 1001);

console.log(contaPOupança);
console.log(constCorrenteRicardo);




















































