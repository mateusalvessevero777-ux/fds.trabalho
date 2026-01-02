const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent = "Vai dar tudo certo.";
});