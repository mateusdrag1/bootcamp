//função calcular
function calcular(){
    var reg = document.getElementById("txtr").value //variável já dada pelo proprio usuário no FORM
    var nom = document.getElementById("txtn").value
    var sal = parseFloat(document.getElementById("txts").value)   
    var res = document.getElementById("res")
    if(sal >= 0 && sal <= 1434){ //CONDICIONAMENTOS
        res.innerHTML = `Você está isento de qualquer pagamento <br>`
        res.innerHTML += `Senhor: ${nom} de Registro: ${reg}`
    } else if(sal <= 2150){
        var ali = sal * 0.075
    } else if(sal <= 2866){
        var ali = sal * 0.15
    } else if(sal <= 3582){
        var ali = sal * 0.225
    } else if(sal >= 3583){
        var ali = sal * 0.275
    } else{
        alert("[ERRO] Valor inválido!")
    }
    if(sal > 1434){
    res.innerHTML = `O valor do seu imposto de renda é R$ ${ali}<br>`
    res.innerHTML += `Senhor: ${nom} de Registro: ${reg}`
    }
}