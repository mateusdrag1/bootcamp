function calcular(){
    var txtv = document.getElementById("txtv").value
    var txtp = document.getElementById("txtp").value
    var res = document.getElementById("res")

    var valor = parseFloat(txtv)
    var parcela = parseInt(txtp)

    if(parcela == 1){
        res.innerHTML = `1 Parcela = 1x ${valor}` 
    } else if ( parcela == 2){
        var p2 = (valor * 0.03) + valor
        res.innerHTML = `2 Parcelas = ${p2} = 2 x ${p2/2}`
    } else {
        var p3 = (valor * 0.07) + valor
        res.innerHTML = `4 Parcelas = ${p3} = 4 x ${p3/4}`
    }
}