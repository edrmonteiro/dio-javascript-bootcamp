function Conta() {}
Conta.prototype.rendimento = 0;
Conta.prototype.depositar = function() {}
Conta.prototype.retirar = function() {}
Conta.prototype.exibirSaldo = function() {
  return `O saldo da conta é: ${this.saldo}.`;
}

var lista  = [nome: "rosa" , "cravo" , "tulipa", "margarida"]
console.log(lista[2]);