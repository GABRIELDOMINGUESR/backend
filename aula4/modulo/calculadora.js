/************************************************************* 
 * Objetivo: Arquivo de funções para realizar calculos matematicos
 * Data: 02/03/2023
 * Autor: Gabriel
 * Versão: 1.0
 *************************************************************/

//Realizar calculo matemático das 4 operações (Somar, Multiplicar, Dividir e Subitrair)
function calcular(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase();

    let resultado;

    if (operacao == 'SOMAR')
        resultado = valor1 + valor2
    else if (operacao == 'SUBITRAIR')
        resultado = valor1 - valor2
    else if (operacao == 'MULTIPLICAR')
        resultado = valor1 * valor2

    //Validar a divisão por 0
    else if (operacao == 'DIVIDIR') {
        if (valor2 == 0) {

            console.log('ERRO: não é possivel dividir por 0')
            entradaDados.close();

        } else
            resultado = valor1 / valor2

    } else {
        console.log('ERRO: Aperação informada é invalida. Confira a sua entrada')
        entradaDados.close(); //Fecha o objeto de entrada de dados (encerra o programa)
    }

    //Validação para tratar a variavel resultado quando menhum calculo é realizado
    if (resultado != undefined)
        return resultado;
    else
        return false;

}

//exporta  uma função para ser ultilizada em outro arquivo
module.exports = {
    calcular
}