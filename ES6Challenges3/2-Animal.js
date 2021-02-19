/*
Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

Entrada
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

Saída
Imprima o nome do animal correspondente à entrada fornecida.
 
Exemplos de Entrada	Exemplos de Saída
vertebrado
mamifero
onivoro

homem

vertebrado
ave
carnivoro
aguia
invertebrado
anelideo
onivoro
minhoca

*/


const filter1 = gets();
const filter2 = gets();
const filter3 = gets();
//complete a solução de acordo com suas variáveis

switch (filter1) {
    case "vertebrado":
      switch (filter2) {
        case "ave":
          switch (filter3) {
            case "carnivoro":
              console.log("aguia");
              break;
            case "onivoro":
              console.log("pomba");
              break;
          }
          break;
        case "mamifero":
          switch (filter3) {
            case "onivoro":
              console.log("homem");
              break;
            case "herbivoro":
              console.log("vaca");
              break;
          }        
          break;
      }
      break;
    case "invertebrado":
      switch (filter2) {
        case "inseto":
          switch (filter3) {
            case "hematofago":
              console.log("pulga");
              break;
            case "herbivoro":
              console.log("lagarta");
              break;
          }        
          break;
        case "anelideo":
          switch (filter3) {
            case "hematofago":
              console.log("sanguessuga");
              break;
            case "onivoro":
              console.log("minhoca");
              break;
          }        break;
      }
      break;
  }