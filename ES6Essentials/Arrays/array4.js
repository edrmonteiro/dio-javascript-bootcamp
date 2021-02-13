// var students = [
//     {name:"John", grade: 7},
//     {name:"Jenny", grade: 5},
//     {name:"Peter", grade: 4},
// ];
// console.log(students);

// const totalGrade = students.reduce((totalGrades, student) => totalGrades += student.grade, 0);
// console.log(totalGrade);

// console.log(totalGrade/students.length);

// console.log(students.reduce((totalNames, student) => totalNames += student.name + ' ', ''));


// Analise o código abaixo e assinale a alternativa que representa os valores corretos que serão exibidos nos console.log respectivamente:

function Pessoa(nome) {
    this.nome = nome;
  }
  
  function PessoaFisica(nome, cpf) {
    Pessoa.call(this, nome);
  
    this.cpf = cpf;
  }
  
  function PessoaJuridica(nome, cnpj) {
    Pessoa(nome);
  
    this.cnpj = cnpj;
  }
  
  const pessoaFisica = new PessoaFisica('Foo', '123.456.670-0');
  const pessoaJuridica = new PessoaJuridica('Bar', '12.345.678/9012-34');
  
  console.log(pessoaFisica);
  console.log(pessoaJuridica);


//   class Pessoa {
//     #nome = '';
  
//     constructor(nome) {
//       this.#nome = nome;
//     }
  
//     get nome() {
//       return `Seu nome é: ${this.#nome}.`;
//     }
  
//     set nome(novoNome) {
//       this.#nome = novoNome;
//     }
//   }
  
//   const pessoa = new Pessoa();
  
//   console.log(pessoa);
//   console.log(pessoa.nome);
//   pessoa.nome = 'Foo';
//   console.log(pessoa.nome);