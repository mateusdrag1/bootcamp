//Velocidade Máxima de 70 Text:OK
//a cada 5km acima do limite você ganha 1 ponto (0,2 por KM)
//Math.Floor()

function verificar() {
    const VM = 70;
    const KM = 5;
    const PM = 12;
    let txtnum = document.getElementById("txtnum")
    let num = Number(txtnum.value)
    let res = document.getElementById("res")
    if (num <= VM) {
        res.innerHTML = "<p>Você está no limite </p>";
    } else {
        const pon = Math.floor((num - VM) / KM);
        if (pon >= PM) {
            res.innerHTML = "<p>Carteira Suspensa</p>";
            res.innerHTML += `Você recebeu : ${pon} pontos em sua carteira`;
        } else {
            res.innerHTML = "<p>Velocidade maxima ultrapassada</p>";
            res.innerHTML += `Você recebeu : ${pon} pontos em sua carteira`;
        }
    }
}