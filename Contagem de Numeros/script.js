function contador(){
    var num = parseInt(document.getElementById("txtf").value)
    var res = document.getElementById("res")
    var soma = 0
    for (var i=1; i <= num; i++){
        soma = soma + i;
    }
    res.innerHTML = `A soma de todos os números de 1 a ${num} é ${soma}`
}