function ola(){
    document.getElementById("resp1").innerHTML = "Olá!"
    document.querySelector(".minha-resposta").style.visibility="visible"
    document.querySelector(".minha-resposta").style.backgroundColor="rgb(255, 251, 141)"
    document.querySelector(".imagem img").src="face.svg"
    document.querySelector(".resposta-amigo").style.visibility="visible"
    document.getElementById("resp2").innerHTML = "E aí!"

   
}

function semConversa(){
    document.getElementById("resp1").innerHTML = "Não quero conversa!"
    document.querySelector(".minha-resposta").style.visibility="visible"
    document.querySelector(".minha-resposta").style.backgroundColor="rgb(255, 251, 141)"
    document.querySelector(".imagem img").src="sad.svg"
    document.querySelector(".resposta-amigo").style.visibility="visible"
    document.getElementById("resp2").innerHTML = ":("
}

function elegante(){
    document.getElementById("resp1").innerHTML = "Está elegante hoje!"
    document.querySelector(".minha-resposta").style.visibility="visible"
    document.querySelector(".minha-resposta").style.backgroundColor="rgb(255, 251, 141)"
    document.querySelector(".imagem img").src="feelings.svg"
    document.querySelector(".resposta-amigo").style.visibility="visible"
    document.getElementById("resp2").innerHTML = "Você também!"
}

function limpar(){
    document.querySelector(".minha-resposta").style.visibility="hidden"
    document.querySelector(".resposta-amigo").style.visibility="hidden"
    document.querySelector(".imagem img").src="emotion.svg"
}