function enviarDados() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const   
   mensagem = document.getElementById('mensagem').value;   
  
  
    // Validação básica (adicione mais validações conforme necessário)
    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Simulação de envio (substitua por uma requisição AJAX real se precisar enviar os dados para um servidor)
    alert("Mensagem enviada com sucesso!");
    // Limpar os campos do formulário (opcional)
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('mensagem').value = "";
  }