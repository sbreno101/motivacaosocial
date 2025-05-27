const form = document.getElementById('form');
const mensagemEnviada = document.getElementById('mensagem-enviada');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    mensagemEnviada.textContent = "Mensagem enviada com sucesso! ✔️";
    form.reset();

    setTimeout(() => {
        mensagemEnviada.textContent = "";
    }, 5000);
});
