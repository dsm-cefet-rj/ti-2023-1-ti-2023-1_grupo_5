export default function registrarLoja(id_prop){
    let cnpj = document.getElementById("cnpj")
    let nome = document.getElementById("nome")
    let endereco = document.getElementById("endereco")
    let email = document.getElementById("email")

    const novaLoja = {
        cnpj: cnpj.value,
        nome: nome.value,
        endereco: endereco.value,
        email: email.value,
        id_proprietario: id_prop
      };
      
      fetch('http://localhost:3000/lojas', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaLoja)
      })
      .then(response => {
        if (response.ok) {
          return response.json(); // nao sei se é necessario
        } else {
          throw new Error('Erro ao adicionar a loja');
        }
      })
      .then(data => {
        console.log('Loja adicionada com sucesso:', data);
      })
      .catch(error => {
        console.error('Erro ao adicionar a loja:', error);
      });
}