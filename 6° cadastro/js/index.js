document.getElementById("cadastro-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "";

    const temDigito = /[0-9]/.test(senha);
    const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    const temMaiuscula = /[A-Z]/.test(senha);

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.textContent = "Digite um e-mail válido.";
        return;
    }

    if (senha.length < 8) {
        mensagem.textContent = "A senha deve ter pelo menos 8 caracteres.";
        return;
    }

    if (!temDigito) {
        mensagem.textContent = "A senha deve conter ao menos 1 dígito.";
        return;
    }

    if (!temEspecial) {
        mensagem.textContent = "A senha deve conter ao menos 1 caractere especial.";
        return;
    }

    if (!temMaiuscula) {
        mensagem.textContent = "A senha deve conter ao menos 1 letra maiúscula.";
        return;
    }

    if (senha !== confirmar) {
        mensagem.textContent = "As senhas não coincidem.";
        return;
    }

    mensagem.style.color = "green";
    mensagem.textContent = "Cadastro realizado com sucesso!";
});
