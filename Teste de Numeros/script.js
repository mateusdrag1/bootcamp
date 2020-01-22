function testar() {
    var numero1 = parseFloat(document.getElementById("txtv1").value)
    var numero2 = parseFloat(document.getElementById("txtv2").value)

    if (numero1 > numero2) {
        alert("O " + numero1 + " É maior que " + numero2);
    }
    if (numero2 > numero1) {
        alert("O " + numero2 + " É maior que " + numero1);
    }
    if (numero1 == numero2) {
        alert("Os valores são iguais");
    }
}