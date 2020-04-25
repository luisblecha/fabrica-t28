function somar() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let resultado = a + b;
  exibirResultado(resultado);
}
function subtrair() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let resultado = a - b;
  exibirResultado(resultado);
}
function multiplicar() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let resultado = a * b;
  exibirResultado(resultado);
}
function dividir() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let resultado = a / b;
  exibirResultado(resultado);
}

function realizarOperacao(operador) {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);

  let resultado = a + operador + b;
  exibirResultado(eval(resultado));
}

function exibirResultado(resultadoRecebido) {
  document.getElementById("resultado").innerHTML = resultadoRecebido;
  document.getElementById("resultado").style.opacity = "1";
}

function limpar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").style.opacity = "0";
}
