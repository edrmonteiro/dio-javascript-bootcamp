/*
Solução de Problemas com JavaScript
3 / 7 - Melhor amigo do Pablo
Desafio
Todo final de ano ocorre uma festa na escola. As inscrições para participar da festa são abertas no início de julho. No momento da inscrição, o aluno pode escolher se quer ser "O Amigo do Pablo" na festa ou não. O mais lógico seria escolher a opção Sim, afinal, é um privilégio ser O Amigo do Pablo, já que ele é a pessoa mais descolada da escola. Porém, há indivíduos que definitivamente não pretendem ser O Amigo do Pablo, e por motivos desconhecidos.

Somente um será o escolhido. Em vista disso, muitos alunos que escolheram a opção Sim realizaram a inscrição diversas vezes para aumentar a própria probabilidade de ser O Amigo do Pablo. A diretora da escola pediu que você desenvolva um programa que organize as inscrições do site, pois está havendo um spam de inscrições. O critério para ser o escolhido é a quantidade de letras do primeiro nome, e em caso de empate, vence aquele que realizou primeiro a inscrição. A organização final dos inscritos deverá seguir a ordem de escolha (Sim ou Não), mas respeitando a ordem alfabética.

OBS.: Ninguém que escolheu a opção Não realizou a inscrição mais de uma vez.

Entrada
A entrada contém somente um caso de teste. Cada linha é composta pelo primeiro nome do participante (sem espaços), seguido da opção SIM (caso o usuário queira ser O Amigo do Pablo) ou NAO (caso não queira). A entrada termina assim que o usuário digita "FIM" (sem as aspas).

Saída
Seu programa deverá imprimir os inscritos pela ordem de escolha e por ordem alfabética, seguido do nome do vencedor. Imprima uma linha em branco entre a lista de inscritos e o nome do vencedor.

 
Exemplo de Entrada	Exemplo de Saída
Joao NAO

Carlos SIM

Abner NAO

Samuel SIM

Ricardo NAO

Abhay SIM

Samuel SIM

Andres SIM

Roberto NAO

Carlos SIM

Samuel SIM

Samuel SIM

Abhay SIM

Aline SIM

Andres SIM

FIM

Abhay

Aline

Andres

Carlos

Samuel

Abner

Joao

Ricardo

Roberto

Amigo do Pablo:

Carlos

 
×
TESTES
Teste #1

Teste #2

Teste #3


*/

linhas = [];
while((linha = gets()) != "FIM")  linhas.push(linha);
vSim = [];
listaAlunos = [];
for (i in (semItensRepetidos = linhas.filter((elem, index, self) => index === self.indexOf(elem)))) {
  arr = semItensRepetidos[i].split(" ");
  listaAlunos.push({nome: arr[0], valor: arr[1]}); 
  if (arr[1] === 'SIM') vSim.push({nome: arr[0], valor: arr[1]}); 
}

listaAlunos.sort((a,b) => a.valor < b.valor ? 1 : a.valor > b.valor ? -1 : a.nome > b.nome ? 1 : -1)
           .map(item => console.log(item.nome));

vSim.sort((a,b) => a.nome.length < b.nome.length ? 1 : a.nome.length > b.nome.length ? -1 : 0);
console.log('Amigo do Pablo:' + '\n' + vSim[0].nome);



















getsLinha = [];
while((linha = gets()) != "FIM")  getsLinha.push(linha);

vSim = [];
listaAlunos = [];
for (i in (semItensRepetidos = getsLinha.filter((elem, index, self) => index === self.indexOf(elem)))) {
  arrAux = semItensRepetidos[i].split(" ");
  
  listaAlunos.push({nome: arrAux[0], valor: arrAux[1]}); 
  if (arrAux[1] === 'SIM') vSim.push({nome: arrAux[0], valor: arrAux[1]}); 
}

listaAlunos.sort((a,b) => a.valor < b.valor ? 1 : a.valor > b.valor ? -1 : a.nome > b.nome ? 1 : -1)
           .map(item => console.log(item.nome));

vSim.sort((a,b) => a.nome.length < b.nome.length ? 1 : a.nome.length > b.nome.length ? -1 : 0);
console.log('Amigo do Pablo:' + '\n' + vSim[0].nome);