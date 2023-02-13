/*******************************************************************************************************
 * objetivo: criar uma média par uma faculdade de 4 notas e se nessesario a nota de um exame 
 *           onde deve ser mostrado se o aluno foi aprovado ou reprovado, as notas devem ser de 0 a 100 
 
 * Data: 10/02/2023  
 * Autor: Gabriel Domingues
 * Versão: 1.0
 **********************************************************************************/
var sistemaMedia = require('./modulo/faculdade.js');


// Bibliotea para entrada de dados
var readline = require('readline');
const { moveMessagePortToContext } = require('worker_threads');
const { mediaExame } = require('./modulo/faculdade.js');


// Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(' \nSistema de Calculo de Médias Da Faculdade');

console.log('\n************************INFORMAÇÃO ALUNO************************************* \n ')
entradaDados.question('Digite o nome do aluno(a): \n', function(nome) {
    let nomeAluno = nome;

    entradaDados.question('Digite o sexo do aluno(a) [F para Feminino] e [N para masculino]: \n', function(sexoAluno) {
        let sexoA = sexoAluno;

        console.log('\n*************************PROFESSOR***************************** \n ')

        entradaDados.question('Digite o nome do Professor(a): \n ', function(nomeDoProfessor) {
            let nomeProf = nomeDoProfessor;

            entradaDados.question('Digite o sexo do Professor(a) [F para Feminino] e [N para masculino]: \n ', function(sexoDoProfessor) {
                let sexoProf = sexoDoProfessor;

                console.log('\n*******************************Curso*************************************')
                entradaDados.question('Qual o curso: \n', function(curso) {
                    let cursoFacul = curso

                    console.log('\n********************MATÉRIA*********************************')

                    entradaDados.question('Digite a Matéria: \n', function(nomeMateria) {
                        let materia = nomeMateria;

                        console.log('\n************************************************************')

                        entradaDados.question('Digite a nota1: \n', function(nota1) {
                            let primeiraNota = nota1;

                            entradaDados.question('Digite a nota2: \n', function(nota2) {
                                let segundaNota = nota2;

                                entradaDados.question('Digite a nota3: \n', function(nota3) {
                                    let terceiraNota = nota3;

                                    entradaDados.question('Digite a nota4: \n', function(nota4) {
                                        let quartaNota = nota4;




                                        if (
                                            primeiraNota == '' ||
                                            segundaNota == '' ||
                                            terceiraNota == '' ||
                                            quartaNota == '') {

                                            console.log('ERRO: É necessário digitar algum valor nas entradas. ');

                                        } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota))

                                        {
                                            console.log('ERRO É necessário digitar numeros nas entradas.')

                                        } else if (

                                            primeiraNota < 0 || primeiraNota > 100 ||
                                            segundaNota < 0 || segundaNota > 100 ||
                                            terceiraNota < 0 || terceiraNota > 100 ||
                                            quartaNota < 0 || quartaNota > 100) {

                                            console.log('ERRO: sistema só aceita notas de 0 a 10. ');
                                        } else {

                                            resultado = sistemaMedia.media(nota1, nota2, nota3, nota4)

                                            if (resultado > 50 && resultado < 69) {
                                                console.log('******************Aluno necessita de exame!*****************************\n')
                                                entradaDados.question('Digite a nota do exame: ', function(notaDoexameDigitada) {

                                                        let digitadaNotaDoExame = Number(notaDoexameDigitada);

                                                        let resultadoExameFinalEnd = sistemaMedia.mediaExame(digitadaNotaDoExame, resultado)

                                                        console.log(resultadoExameFinalEnd)

                                                    })
                                                    // } else if (resultado < 50) {
                                                    //     console.log('Aluno REPROVADO')

                                            } else {
                                                entradaDados.question('Digite a nota do exame: \n', function(exame) {

                                                    let notaComMedia = exame;


                                                    mediaExame = sistemaMedia.mediaExame(notaComMedia, resultado)
                                                    console.log(mediaExame);

                                                    console.log('\n ****************Relatorio*********************')


                                                    console.log(`O aluno ${nomeAluno} Foi ${statusAluno} com o Professor ${nomeDoProfessor} no curso de ${curso} `)







                                                })
                                            }
                                        }

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});