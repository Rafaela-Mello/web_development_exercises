document.getElementById("form-sorteio").addEventListener("submit", function (e) {
    e.preventDefault();

    const inicio = parseInt(document.getElementById("inicio").value);
    const fim = parseInt(document.getElementById("fim").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (isNaN(inicio) || isNaN(fim) || isNaN(quantidade)) {
        resultado.textContent = "Preencha todos os campos corretamente.";
        return;
    }

    if (inicio >= fim) {
        resultado.textContent = "O número final deve ser maior que o inicial.";
        return;
    }

    const intervalo = fim - inicio + 1;

    if (quantidade > intervalo) {
        resultado.textContent = "Quantidade maior do que o intervalo disponível.";
        return;
    }

    let numeros = [];
    for (let i = inicio; i <= fim; i++) {
        numeros.push(i);
    }

    numeros.sort(() => Math.random() - 0.5);

    const sorteados = numeros.slice(0, quantidade).sort((a, b) => a - b);

    const titulo = document.createElement("div");
    titulo.id = "resultado-titulo";
    titulo.textContent = "Números sorteados:";
    resultado.appendChild(titulo);

    const bolinhasContainer = document.createElement("div");
    bolinhasContainer.classList.add("bolinhas");

    sorteados.forEach(numero => {
        const bola = document.createElement("div");
        bola.classList.add("bola");
        bola.textContent = numero;
        bolinhasContainer.appendChild(bola);
    });

    resultado.appendChild(bolinhasContainer);
});
