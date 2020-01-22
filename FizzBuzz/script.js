//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5 => FizzBuzz
//Não divisível por 3 ou 5 => Entrada
//Se não for numero ele avisa

function FizzBuzz() {
    let number = document.getElementById("txtnum")
    let num = number.value
    let res = document.getElementById("res")

    if (num <= 0) {
        alert('[ERRO] Valor inválido, digite apenas números inteiros e positivos');
    } else {
        if (num % 3 === 0) {
            res.innerHTML = "Fizz"
        }
        if (num % 5 === 0) {
            res.innerHTML = "Buzz";
        }
        if (num % 3 === 0 && num % 5 === 0) {
            res.innerHTML = "FizzBuzz";
        }
        if (num % 3 !== 0 && num % 5 !== 0) {
            res.innerHTML = `${num}`
        }
    }
}