class CuentaBancaria {
    constructor (saldoInicial){
        this.saldo = saldoInicial;
    }
    depositar(cantidad){
        this.saldo += cantidad;
    }
    retirar(cantidad){
        if(cantidad <= this.saldo){
            this.saldo -= cantidad;
            return cantidad;
        }else{
            return 'FONDOS INSUFICIENTES...';
        }
    }
    verSaldo(){
        return this.saldo
    }
}

const cuenta = new CuentaBancaria(1000);

document.getElementById('transactionForm').addEventListener('submit', function(event){
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value)
    const transactionType = document.getElementById('transactionType').value;

    const result = document.getElementById('result'); //////////////////////////////////
    
    result.innerHTML = ''; //////////////////

    if (transactionType === 'deposit'){
        cuenta.depositar(amount);
    }else if(transactionType === 'withdrawal'){
        const withdrawalResult = cuenta.retirar(amount);
        if (typeof withdrawalResult === 'string'){
            alert(withdrawalResult);
        }
    }

    let saldoResultado = document.createElement('p'); /////////////////////////////
    saldoResultado.innerHTML = `El saldo actual es: $${cuenta.verSaldo()}`; ////////////////////////////
    result.append(saldoResultado); ////////////////////////

    saldoResultado.style.margin = '30px';
    saldoResultado.style.fontSize = '1.5em';
})
