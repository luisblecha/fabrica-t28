function salvar() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let cpf = document.getElementById("cpf").value;
  let estado = document.getElementById("estado").value;
  let modalidadeSelecionada = document.querySelector(
    "input[type=radio]:checked"
  );

  console.log(nome);
  console.log(email);
  console.log(cpf);
  console.log(estado);

  if (nome == "") {
    exibirErro("Preencha o nome!");
  } else if (email == "") {
    exibirErro("Preencha o e-mail!");
  } else if (cpf == "") {
    exibirErro("Preencha o CPF!");
  } else if (estado == "") {
    exibirErro("Escolha um estado!");
  } else if (modalidadeSelecionada == null) {
    exibirErro("Escolha a modalidade");
  } else {
    exibirAlertaSucesso();
    exibirResultado();
  }
}

function exibirAlertaSucesso() {
  document.querySelector(".alerta").style.visibility = "visible";
  document.querySelector(".alerta").style.backgroundColor = "lightgreen";
  document.querySelector(".alerta img").src = "Tick.svg";
  document.querySelector(".alerta p").innerHTML = "Salvo com sucesso!";
}

function exibirErro(mensagem) {
  document.querySelector(".alerta").style.visibility = "visible";
  document.querySelector(".alerta").style.backgroundColor = "lightcoral";
  document.querySelector(".alerta img").src = "alert.svg";
  document.querySelector(".alerta p").innerHTML = mensagem;
}

function fecharAlerta() {
  document.querySelector(".alerta").style.visibility = "hidden";
}

function exibirResultado() {
  let resultado = document.getElementById("resultado");
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let cpf = document.getElementById("cpf").value;
  let estado = document.getElementById("estado").value;
  let modalidadeSelecionada = document.querySelector(
    "input[type=radio]:checked"
  ).value;

  let modalidadeFormatada = "";

  switch (modalidadeSelecionada) {
    case "1":
      modalidadeFormatada = "Presencial";
      break;
    case "2":
      modalidadeFormatada = "Online";
      break;
    default:
      modalidadeFormatada = "Modalidade inválida";
      break;
  }

  resultado.innerHTML = `
  Nome: ${nome}
  Email: ${email}
  CPF: ${cpf}
  Estado: ${estado}
  Modalidade: ${modalidadeFormatada}
  `;
}
