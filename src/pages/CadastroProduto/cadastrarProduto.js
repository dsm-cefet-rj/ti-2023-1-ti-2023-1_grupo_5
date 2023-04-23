
export default function cadastrarProduto(id){
    let img = document.getElementById("img");
    let categoria = document.getElementById("categoria");
    let descricao = document.getElementById("descricao");
    let preco = document.getElementById("preco");
    let detalhes = document.getElementById("detalhes");

    const prod = 
    {
        img : "../../public/images/placeholder_img.jpg",
        categoria : categoria.value,
        descricao : descricao.value,
        preco : preco.value,
        detalhes : detalhes.value,
        id_lojista : id
    }

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(prod)
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro ao adicionar o produto');
        }
      })
      .then(data => {
        console.log('Produto adicionado com sucesso:', data);
      })
      .catch(error => {
        console.error('Erro ao adicionar o produto:', error);
      });
}