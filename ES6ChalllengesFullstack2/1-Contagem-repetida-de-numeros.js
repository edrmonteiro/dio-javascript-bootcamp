/*
Solução de Problemas com JavaScript
1 / 7 - Contagem repetida de números
Desafio
Neste desafio sua tarefa será ler vários números e em seguida dizer quantas vezes cada número aparece, ou seja, deve-se escrever cada um dos valores distintos que aparecem na entrada por ordem crescente de valor.

Entrada
A primeira linha de entrada contem um único inteiro N, que indica a quantidade de valores que serão lidos para X (1 ≤ N ≤ 2000) logo em seguida. Com certeza cada número não aparecerá mais do que 20 vezes na entrada de dados.

Saída
Imprima a saída de acordo com o exemplo fornecido abaixo, indicando quantas vezes cada um deles aparece na entrada por ordem crescente de valor.

 
Exemplo de Entrada	Exemplo de Saída
7
8
10
8
260
4
10
10

4 aparece 1 vez(es)
8 aparece 2 vez(es)
10 aparece 3 vez(es)
260 aparece 1 vez(es)

*/

//aux = ["5", "5", "6", "5", "4", "4"];
//let n = Number(aux.shift());
//  let num = aux.shift();

var dict = {};
let n = Number(gets());
//console.log(n);
for (var i = 0; i < n ; i++){
  let num = gets();
  if (dict[num]){
    dict[num] ++;
  }
  else {
    dict[num]=1;
  }
}
for( i in dict){
    console.log(`${i} aparece ${dict[i]} vez(es)`)
}

