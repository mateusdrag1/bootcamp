window.onload = function(){
    var num_secreto;
    var ten = 0;
    var res = document.getElementById("res");
    var dic = document.getElementById("dica");
    num_secreto = sortearNumero();

    document.getElementById("btn").onclick = function(){
        ten++;
        var num_chute = parseInt(document.getElementById("txtn").value);
        if(num_chute >= 0 && num_chute <= 100){
            if(num_chute < num_secreto){
                dic.innerHTML = "O número sorteado é maior."
            } else if (num_chute > num_secreto){
                dic.innerHTML = "O número sorteado é menor."
            } else {
                res.innerHTML = `Parabéns! Você acertou em ${ten} tentativas`
                setTimeout("location.href = 'modelo.html'",10000);
                res.innerHTML += `<br>Reiniciando a pagina em 10 segundos`
            }
        } else {
            alert("[ERRO] Número Inválido")
        }
    }
}

function sortearNumero(){
    return Math.round(Math.random()*100);
}
