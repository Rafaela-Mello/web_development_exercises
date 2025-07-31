window.onload = function () {
    const estadoSelect = document.getElementById("estado");
    const municipioSelect = document.getElementById("municipio");
  
    // Carregar estados
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then(response => response.json())
      .then(estados => {
        estados.sort((a, b) => a.nome.localeCompare(b.nome));
        estados.forEach(estado => {
          const option = document.createElement("option");
          option.value = estado.sigla;
          option.textContent = estado.nome;
          estadoSelect.appendChild(option);
        });
      });
  
    // Carregar municípios ao selecionar estado
    estadoSelect.addEventListener("change", function () {
      const sigla = estadoSelect.value;
      municipioSelect.innerHTML = '<option value="">Selecione um município</option>';
      municipioSelect.disabled = true;
  
      if (sigla) {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`)
          .then(response => response.json())
          .then(municipios => {
            municipios.sort((a, b) => a.nome.localeCompare(b.nome));
            municipios.forEach(municipio => {
              const option = document.createElement("option");
              option.value = municipio.nome;
              option.textContent = municipio.nome;
              municipioSelect.appendChild(option);
            });
            municipioSelect.disabled = false;
          });
      }
    });
  };
  