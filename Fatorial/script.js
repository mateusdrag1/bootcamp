function fatorial(){
    var num = parseInt(document.getElementById("txtf").value)
    var res = document.getElementById("res")
    var fat = 1
    for (var i=1; i <= num; i++){
        fat = fat * i;
    }
    res.innerHTML = `O valor do seu fatorial é: ${fat}`
}