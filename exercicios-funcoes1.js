//dados do exercício
const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
        nome: 'Miguel',
        nota: 3,
        turma: '20'
    },
];

//declarar função com array emédia das notas
function alunosAprovados(alunos, media) {
	//declarar var aprovados vazio fora do for
    let aprovados = [];

    //usar loop do for para percorrer array
	for (let i = 0; i < alunos.length; i++) {
		//usando object destructing
        let { nota, nome } = alunos[i];

        //condicional para verificar as notas
		if (nota >= media) {
			//caso verdadeiro, .push no nome para a var let.
            aprovados.push(nome);
		}
	}
    //retornar aprovados
	return aprovados;
}
//chama concole.log para imprimir e a função dentro dele
console.log(alunosAprovados(alunos, 5));