//dados do exercício
function calculaIdade(anos) {
    return `daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

const pessoa1 = {
    nome: 'Elaine',
    idade: 30,
}

const pessoa2 = {
    nome: 'Geraldo',
    idade: 26,
}

const animal = {
    nome: 'Atena',
    idade: 5,

}

console.log(calculaIdade.call(pessoa1,30));
//com o apply, deve ser colocado com colchetes
//console.log(calculaIdade.apply(pessoa1,[30]));
