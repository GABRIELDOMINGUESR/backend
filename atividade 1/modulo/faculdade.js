function media(nota1, nota2, nota3, nota4) {

    let primeiraNota = Number(nota1)
    let segundaNota = Number(nota2)
    let terceiraNota = Number(nota3)
    let quartaNota = Number(nota4)

    let media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4
    let resultado;


    return media;




}

function mediaExame(notaDoExame, mediaDoAluno) {


    let exame = notaDoExame;
    let media = mediaDoAluno;


    let mediaExame = (Number(mediaDoAluno) + Number(mediaDoAluno)) / 2

    return mediaExame;

}

function statusAluno(aprovado, reporvado) {
    let statusBom = aprovado;
    let statusRuim = reporvado;


    if (media > 70) {
        return 'Aprovado'

    } else {
        return 'Reprovado'
    }



}

module.exports = {
    media,
    mediaExame,
    statusAluno
}