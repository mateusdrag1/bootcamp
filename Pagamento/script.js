/*  
    À vista 10% de desconto
    Cartão 5% de desconto
    Parcelado 10% de aumento
*/

function calculo() {
    var valor = parseFloat(document.getElementById("txtp").value)
    var tipo = parseInt(document.getElementById("pagamento").value)
    var res = document.getElementById("res")

    if (tipo == 1) {
        var desconto = valor - (valor * 0.1)
    } else if (tipo == 2) {
        var desconto = valor - (valor * 0.05)
    } else {
        var desconto = valor + (valor * 0.1)
    }
    
    res.innerHTML = `<p>Valor real do produto: ${valor}</p>Valor a ser pago: ${desconto}`
}