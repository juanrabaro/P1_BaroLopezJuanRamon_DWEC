function sumar2() {
    var num1 = parseFloat(document.getElementById('num1b').value)
    var num2 = parseFloat(document.getElementById('num2b').value)

    var resultado = num1 + num2

    document.getElementById('resultadob').textContent = resultado
}