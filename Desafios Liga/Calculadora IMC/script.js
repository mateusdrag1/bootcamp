/*
    TESTAR
    CALCULADORA IMC :
    PESO / Altura*Altura
*/

function calcular() {
    let pes = document.getElementById("txtp").value
    let alt = document.getElementById("txta").value
    let res = document.getElementById("res")

    if (pes <= 0 && alt <= 0) {
        print("[ERRO] Os valores digitados são inválidos")
    } else {
        var imc = parseFloat(pes / (alt * alt))
        res.innerHTML = `<p>O resultado do seu imc é ${imc}</p>`
    }
}
