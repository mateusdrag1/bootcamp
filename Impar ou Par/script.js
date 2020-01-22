function verificar() {
    let num = document.getElementById("txtnum")
    let res = document.getElementById("res")
    for (let i = 0; i <= Number(num.value); i++) {
        if (i % 2 === 0) {
            res.innerHTML = `${Number(num.value)} é PAR`
        } else {
            res.innerHTML = `${Number(num.value)} é IMPAR`
        }
    }
}