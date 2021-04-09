/*
5 / 7 - Conjuntos bons ou ruins?
Desafio
Nesse algoritmo você deverá descobrir se um conjunto de palavras é bom ou ruim. Por definição, um conjunto é bom quando nenhuma palavra desse conjunto é um prefixo de outra palavra. Caso contrário, é considerado um conjunto ruim.

Por exemplo, {dbc, dae, dbcde} é um conjunto ruim, pois dbc é um prefixo de dbcde. Quando duas palavras são idênticas, definimos como uma sendo prefixo da outra.

Entrada
A entrada contém vários casos de teste. A primeira linha de cada caso de teste terá um inteiro N (1 ≤ N ≤ 10⁵), que representa a quantidade de palavras no conjunto. Segue então N linhas, cada uma tendo uma palavra de no máximo 100 letras minúsculas. A entrada termina quando N = 0 e não deve ser processada.

Saída
Para cada caso de teste, você deverá imprimir "Conjunto Bom", ou "Conjunto Ruim", conforme explicado acima.

 
Exemplo de Entrada	Exemplo de Saída
3
abc
dae
abcde
2
abc
def
0
 

Conjunto Ruim
Conjunto Bom
 
*/
let n = gets();
while(n != 0)
{
  let pilha = [];
  for (let i = 0; i < n; i++){
    pilha.push(gets());
  }
  //console.log(pilha);
  let encontrou = false;
  for (let j = 0; j < n; j++){
      let testar = pilha.shift();
      for (let i = 0; i < n - 1; i++){
          if( pilha[i].startsWith(testar)){
              encontrou = true;
              break;
          }
      }
      //console.log(pilha);
      if (encontrou)
          break;
      pilha.push(testar);    
  }
  if (encontrou){
    console.log("Conjunto Ruim")
  }
  else{
    console.log("Conjunto Bom")
  }
  n = gets();
}

