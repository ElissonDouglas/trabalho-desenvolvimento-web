let formButton = document.getElementById("enviarEmail");
let form = document.getElementById("formularioContato");

formButton.addEventListener("click", function() {
    alert("Mensagem enviada com sucesso!");
    form.reset(); // limpa os campos depois que envia a mensage.m
})