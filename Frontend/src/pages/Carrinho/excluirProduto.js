export default async function excluirDoCarrinho(id_conta, produto){
    let id
    //retorna o carrinho para verificar a quantidade do produto
    let c = await fetch("http://localhost:3000/carrinho?id_conta=" + id_conta)
    .then( response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error("não foi possível obter o carrinho")
        }
    })
    .then(data => {
        id = data[0].id
        return data
    })
    .catch(error => {console.error(error)})

    //verifica o produto e retira o produto
    let p = {produtos: c[0].produtos}

    for(let i=0 ; i<p.produtos.length ; i++){
        if(p.produtos[i].id == produto.id){
            p.produtos.splice(i, i)
        }
    }

    //atualiza o carrinho
    fetch("http://localhost:3000/carrinho/" + id, {
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(p)
    })
    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error("não foi possível inserir o produto no carrinho")
        }
    })
    .catch(error => {
        console.error(error)
    })
}