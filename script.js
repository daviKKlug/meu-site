document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
  
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
                      // Limpar o conteúdo inicial
                          content.innerHTML = '';
  
                       // Exibir os dados dos usuários
                           data.usuarios.forEach(usuario => {
                          content.innerHTML += `<p>${usuario.nome} - ${usuario.email}</p>`;
                            });
  
                       // Exibir o JSON completo
                       //   const jsonPre = document.createElement('pre');
                       //    jsonPre.textContent = JSON.stringify(data, null, 2);
                       //  content.appendChild(jsonPre);
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
  });