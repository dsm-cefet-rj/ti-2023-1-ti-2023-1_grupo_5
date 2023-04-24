export default async function adicionarAoCarrinho(id_conta, produto){
    let id
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

    let p = {produtos: c[0].produtos}
    let existe = false
    p.produtos.map(aux => {
        if(aux.id == produto.id){
            aux.quantidade += 1
            existe = true
            console.log("true")
            return
        }
    })
    if(existe == false){
        produto.quantidade = 1
        p.produtos.push(produto)
        console.log("false")
    }
    

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