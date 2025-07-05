


 
    function abrirWhatsapp() {
      var taman_cober = document.getElementById("tamanho_cobertura").value;
      var massa = document.getElementById("seletor_massas").value;
      var recheio = document.getElementById("seletor_recheios").value;
      var recheio2 = document.getElementById("seletor_recheios2").value;
      var recheio_especiais = document.getElementById("seletor_recheios_especial").value;
      var textarea = document.getElementById("msg").value;
      var url = "https://wa.me/5571991643075?text=" // Seu numero
        + "*Pedido de Bolo*" + "%0a" // Mensagem personalizada
        + "%0a" // Quebra de linha
        + "*Tamanho e Cobertura*: " + taman_cober + "%0a" // Dados do formulário
        + "*Massa*: " + massa + "%0a"
        + "*Opção Recheio 01*: " + recheio + "%0a"
        + "*Opção Recheio 02*: " + recheio2 + "%0a"
        + "*Recheio Especial*: " + recheio_especiais + "%0a"
        + "*Informações Adicionais*: " + textarea;
      window.open(url, '_blank').focus();
    }
