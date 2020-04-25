function salvar() {
  let nome = document.getElementById("nome").value;
  let contato = document.getElementById("contato").value;
  let cpf = document.getElementById("cpf").value;
  let compra = document.getElementById("compra").value;
  let modalidadePagamento = document.querySelector("input[type=radio]:checked");
  let parcelamento = document.getElementById("parcelamento").value;

  console.log(nome);
  console.log(contato);
  console.log(cpf);
  console.log(compra);
  console.log(modalidadePagamento);
  console.log(parcelamento);

  if (nome == "") {
    alertaErro("Preencha o nome!");
  } else if (contato == "") {
    alertaErro("Preencha os dados para contato!");
  } else if (cpf == "") {
    alertaErro("Preencha o CPF!");
  } else if (compra == "") {
    alertaErro("Insira o valor da compra!");
  } else if (modalidadePagamento == null) {
    alertaErro("Escolha a forma de pagamento!");
  } else if (parcelamento == "") {
    alertaErro("Escolha a opção de parcelamento!");
  } else {
    alertaSucesso();
    exibirResultado();
    limpar();
  }
}

function alertaErro(mensagem) {
  document.querySelector(".alerta").style.visibility = "visible";
  document.querySelector(".alerta").style.backgroundColor = "lightcoral";
  document.querySelector(".alerta img").src = "alert.svg";
  document.querySelector(".alerta p").innerHTML = mensagem;
}

function fecharAlerta() {
  document.querySelector(".alerta").style.visibility = "hidden";
}

function alertaSucesso() {
  document.querySelector(".alerta").style.visibility = "visible";
  document.querySelector(".alerta").style.backgroundColor = "lightgreen";
  document.querySelector(".alerta img").src = "tick.svg";
  document.querySelector(".alerta p").innerHTML = "Salvo com sucesso!";
}

function limpar() {
  document.getElementById("nome").value = "";
  document.getElementById("contato").value = "";
  document.getElementById("cpf").value = "";
  document.getElementById("compra").value = "";
  document.querySelector("input[type=radio]:checked").checked = false;
  document.getElementById("parcelamento").value = "";
}

function exibirResultado() {
  let resultado = document.getElementById("resultado");
  let nome = document.getElementById("nome").value;
  let contato = document.getElementById("contato").value;
  let cpf = document.getElementById("cpf").value;
  let compra = document.getElementById("compra").value;
  let modalidadePagamento = document.querySelector("input[type=radio]:checked")
    .value;
  let parcelamento = document.getElementById("parcelamento").value;

  let modalidadePagamentoFormatada = "";

  switch (modalidadePagamento) {
    case "1":
      modalidadePagamentoFormatada = "Dinheiro";
      break;
    case "2":
      modalidadePagamentoFormatada = "Cartão de crédito";
      break;
    case "32":
      modalidadePagamentoFormatada = "Cartão de débito";
      break;
  }

  let parcelamentoFormatado = "";
  switch (parcelamento) {
    case "1":
      parcelamentoFormatado = "À vista";
      break;
    case "2":
      parcelamentoFormatado = "2 parcelas";
      break;
  }

  resultado.innerHTML = `
              DADOS DA VENDA
  -------------------------------------------
  Nome:  ${nome}
  -------------------------------------------
  Contato: ${contato}
  -------------------------------------------
  CPF: ${cpf}
  -------------------------------------------
  Forma de pagamento: ${modalidadePagamentoFormatada}
  -------------------------------------------
  Quantidade de parcelas: ${parcelamentoFormatado}
  -------------------------------------------
  TOTAL: ${compra}
  `;
}
