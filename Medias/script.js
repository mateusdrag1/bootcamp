function mediaanual() {
    var n1 = parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)
    var n3 = parseFloat(document.getElementById("n3").value)
    var soma = n1 + n2 + n3
    var res = document.getElementById("res")

    if ((n1 >= 0 && n1 <= 10) && (n2 >= 0 && n2 <= 10) && (n3 >= 0 && n3 <= 10)) {
        var media = (soma) / 3
        if (media >= 6) {
            res.innerHTML = `Sua média foi: ${media}<br> Você Foi Aprovado`
        } else if (media >= 3 & media < 6) {
            res.innerHTML = `Sua média foi: ${media}<br> Você está no Exame final`
        } else {
            res.innerHTML = `Sua média foi: ${media}<br> Você foi Reprovado`
        }
    } else {
        alert("[ERRO] Valor inválido, Digite uma nota entre 0 e 10")
    }
}