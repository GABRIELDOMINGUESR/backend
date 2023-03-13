/**********************************************************************
 * Objetivo: criar uma api para manipulação de Estados e Cidades
 * Autor: Gabriel Domingues
 * Data: 10/03/2023
 * Vesão 1.0 
 **********************************************************************/

/*******************************************************************************
 * Ecprres - dependencia do Node, que penprmite a integração entre o protocolo http com código
 *          npm entall exprress --save
 * 
 *       cors - gerenciador de permissões para o protocolo HTTP
 *          npm entall cors --save
 * 
 * 
 *   Body-parser - É uma dependencia que permite manipular dados enviados pelo body de requisição
 *           npm entall body-parser --save         
 */

//importe das depemdencias para criar as API



//Responsavel pelas requisições 
const express = require('express');

//Responsavel pelas permissões das requisições
const cors = require('cors');

//Responsavel pela manipulação do body da requisição
const bodyParser = require('body-parser');

//importe o arquivo de função 
const estadosCidades = require('./modulo/estados_cidades.js')


//Cria um objeto com as informações da classe express
const app = express();



//Define as peermissões no header da API
app.use((request, response, next) => {

    // Permite gerenciar a origem das requisições da API
    // O "*"  siguinifica que a API sera publica
    //O "IP" secolocar o IP, a API somente vai responder a aquela maquina  
    response.header('Access-Control-Allow-Origin', '*');

    //Permite gerenciar quais verbos (metodos) poderão fazer requisições
    response.header('Aceces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPITIONS')

    //Ativa o cors das requisições as permissões estabelecidas
    app.use(cors())

    next()
});


//endPoints

//endPoint para listar os estados
app.get('/listaDeEstados', cors(), async function(request, response, next) {



    //Chama a função que retorna os estados 
    let listaDeEstados = estadosCidades.getListaDeEstados()

    //Tratamento para validar se a função realizou o processamento
    if (listaDeEstados) {
        //Retorna o Json e o Status code
        response.json(listaDeEstados)
        response.status(200)
    } else {
        response.status(500)
    }


});

//endPoint lista as caracteristicas do estado pela sigla
app.get('/estado/sigla/:uf', cors(), async function(request, response, next) {
    // :uf É uma variave que sera utilizada para passagem de valores, na url da requisição

    //Recebe o valor da variavel uf que sera encaminhada na URL da requisição
    let siglaEstado = request.params.uf
    let statusCode;
    let dadosEstado = {}



    //tratamento para validar os valor encaminhados no paramentro
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstado.message = "Não é possivel processar a requisição, pois a sigla do estado não foi informado corretamente ou não atende os requisitos de (2 digitos)"
    } else {
        //Chama a função que filtra o estado pela sigla
        let estado = estadosCidades.getDadosEstados(siglaEstado)

        //Valida se houve retorno da válido da função
        if (estado) {
            statusCode = 200 //Estado encontrado
            dadosEstado = estado

        } else {
            statusCode = 404 //Estados não encontrad
            dadosEstado.message = "Não é possivel processar a requisição, pois a sigla do estado não foi informado corretamente ou não atende os requisitos de (2 digitos)"
        }
    }
    response.status(statusCode)
    response.json(dadosEstado)

})


app.get('/listaDeCapital', cors(), async function(request, response, next) {
    let siglaCapital = request.params.uf
    let statusCode
    let dadosCapital = {}

    if (siglaCapital == '' || siglaCapital == undefined || siglaCapital.length != 2 || !isNaN(siglaCapital)) {
        statusCode = 400
        dadosCapital.message = "Não é possivel processar a requisição"
    } else {
        let capital = estadosCidades.getCapitalEstado(siglaCapital)

        if (capital) {
            statusCode = 400
            dadosCapital = capital
        } else {
            statusCode = 404
            dadosCapital.message = "Não é possivel processar a requisição"

        }
    }

    response.status(statusCode)
    response.json(dadosCapital)

})

































//Permite carregar os endPoints e agradar as 
//requisições pelo protocolo http na porta 8080
app.listen(8080, function() {
    console.log('Servidor aguardando requisição na porta 8080');

})