document.getElementById("cadastro-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    const temDigito = /[0-9]/.test(senha);
    const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    const temMaiuscula = /[A-Z]/.test(senha);

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = '<div class="alert alert-danger" role="alert">Digite um e-mail válido.</div>';
        return;
    }

    if (senha.length < 8) {
        mensagem.innerHTML = '<div class="alert alert-danger" role="alert">A senha deve ter pelo menos 8 caracteres.</div>';
        return;
    }

    if (!temDigito) {
        mensagem.innerHTML = '<div class="alert alert-danger" role="alert">A senha deve conter ao menos 1 dígito.</div>';
        return;
    }

    if (!temEspecial) {
        mensagem.innerHTML = '<div class="alert alert-danger" role="alert">A senha deve conter ao menos 1 caractere especial.</div>';
        return;
    }

    if (!temMaiuscula) {
        mensagem.innerHTML = '<div class="alert alert-danger" role="alert">A senha deve conter ao menos 1 letra maiúscula.</div>';
        return;
    }

    mensagem.innerHTML = '<div class="alert alert-success" role="alert">Cadastro realizado com sucesso!</div>';
});
