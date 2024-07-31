document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.caixa').addEventListener('submit', function (event) {
      event.preventDefault();
    
      const usuario = document.querySelector('#usuario').value.trim();
      const email = document.querySelector('#email').value.trim();
      const senha = document.querySelector('#senha').value;
      const repete_senha = document.querySelector('#repete_senha').value;
      const resposta = document.querySelector('#resposta');
  
    
      if (!usuario || !email || !senha || !repete_senha) {
        resposta.textContent = 'Todos os campos são obrigatórios.';
        return;
      }
  
    
      if (senha !== repete_senha) {
        resposta.textContent = 'As senhas não coincidem.';
        return;
      }
  
      const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      if (!senhaForte.test(senha)) {
        resposta.textContent = 'A senha deve ter no mínimo 8 caracteres, com uma letra maiúscula, uma letra minúscula, um número e um caractere especial.';
        return;
      }

      resposta.style.color = 'green';
      resposta.textContent = 'Cadastro realizado com sucesso!';
    });

  });
  