/*
    TESTAR
    CALCULAR A ÁREA E O PERÍMETRO DE UM RETÂNGULO
*/

function calcular() {
    let bas = document.getElementById("txtb").value
    let alt = document.getElementById("txta").value
    let res = document.getElementById("res")

    if (bas <= 0 && alt <= 0) {
        print("[ERRO] Os valores digitados são inválidos")
    } else {
        var area = parseFloat(bas * alt)
        var peri = parseFloat(bas *2 + alt*2)
        res.innerHTML = `<p>A área total do retângulo é: ${area} <br> Seu perímetro é: ${peri}</p>`
    }
}
