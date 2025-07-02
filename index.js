
 
    function abrirWhatsapp() {
      var taman_cober = document.getElementById("tamanho_cobertura").value;
      var massa = document.getElementById("seletor_massas").value;
      var recheio = document.getElementById("seletor_recheios").value;
      var recheio_especiais = document.getElementById("seletor_recheios_especial").value;
      var url = "https://wa.me/5571991643075?text=" // Seu numero
        + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
        + "%0a" // Quebra de linha
        + "*Tamanho e Cobertura*: " + taman_cober + "%0a" // Dados do formulário
        + "*Massa*: " + massa + "%0a"
        + "*Recheio*: " + recheio + "%0a"
        + "*Recheio Especial*: " + recheio_especiais;
      window.open(url, '_blank').focus();
    }
