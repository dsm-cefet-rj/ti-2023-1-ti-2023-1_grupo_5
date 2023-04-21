
export default async function editarProduto(id){
    let categoria = document.getElementById("produto_categoria")
    let descricao = document.getElementById("produto_descricao")
    let detalhes = document.getElementById("produto_detalhes")
    let preco = document.getElementById("produto_preco")

    let produto = {}
    
    if(categoria.value != ""){produto.categoria = categoria.value}
    if(descricao.value != ""){produto.descricao = descricao.value}
    if(detalhes.value != ""){produto.detalhes = detalhes.value}
    if(preco.value != ""){produto.preco = preco.value}
    
    await fetch("http://localhost:3000/produtos/" + id, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(produto)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ');
            }
        }).then(data =>{
            console.log(data)
            return;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}
