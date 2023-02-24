/**********************************************************
 * Objetivo: Trabalhando com Array
 * Data:  24/02/2022
 * Autor: Gabriel Domingues
 *  Versão
 ************************************************************/

// [] - siguinifica que estamos manipulando um Array de dados
// {} - siguinifica que estamos manipulando um formato Json de dados

const listaNomes = ['Gabriel', 'Maria', 'Luid', 'Carlos']

//Verifica o tipo de dados do enmento listaNomes
// console.log(typeof(listaDeNomes))

// verifica o tipo de dados de um indice (item) do array
console.log(typeof(listaNomes[3]))

//Exibe todos os elementos de um array
console.log(listaNomes)

//Exibe apenas um elemento conforme o seu indice
console.log(listaNomes[0])


console.log('Nome do aluno é:' + listaNomes[0])

console.log(`Nome do aluno é:' ${listaNomes[1]}`)

//length - Permite contar quantos elementos tem em um array
console.log(`A Quantidade do meu array é: ${listaNomes.length}`)
console.log('\n**********************************************************\n')
    //Percorrendo um array usando while

let cont = 0 //start
let qtItens = listaNomes.length //stop

console.log('Exibindo dados do Array com while')
while (cont < qtItens) {
    console.log(`Nome: ${listaNomes[cont]}`)
    cont += 1
}

console.log('\n**********************************************************\n')

//Percorrendo um array com FOR

console.log('Exibindo dados do array com For')
let qtdeNomes = listaNomes.length
for (let cont = 0; cont < qtdeNomes; cont++)
    console.log(`Nome: ${listaNomes[cont]}`)

console.log('\n**********************************************************\n')

//Percorrendo um array com FOREACH
console.log('Exibindo dados do array com FOREACH')

//ForEach é um metodo de um objeto array que retorna uma função de call-back
listaNomes.forEach(function(nome) {

    console.log(`Nome: ${nome}`)

})
console.log('\n**********************************************************\n')

//Adicionando elementos novos no Array

//Push - Adiciona elementos no final do array
listaNomes.push('Alexandre')

console.log(listaNomes)

//unshift - Adiciona elementos no inicio do Array (ele muda todos os proximos elementos)
listaNomes.unshift('Antonio')
console.log(listaNomes)

console.log('\n**********************************************************\n')

//Removendo elementos do Array
//pop - remove o ultimo elemento do array

listaNomes.pop()
console.log(listaNomes)