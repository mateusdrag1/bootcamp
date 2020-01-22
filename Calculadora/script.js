function calcular() {
    var num = document.getElementById("txtnum1")
    var num2 = document.getElementById("txtnum2")
    var fop = document.getElementsByName("radio")
    var res = document.getElementById("res")

    if (fop[0].checked) {
        var op = Number(num.value) + Number(num2.value)
        res.innerHTML = `${op}`;
    }
    if (fop[1].checked) {
        var op = Number(num.value) - Number(num2.value)
        res.innerHTML = `${op}`;
    }
    if (fop[2].checked) {
        var op = Number(num.value) * Number(num2.value)
        res.innerHTML = `${op}`;
    }
    if (fop[3].checked) {
        var op = Number(num.value) / Number(num2.value)
        res.innerHTML = `${op}`;
    }
}