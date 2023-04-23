export default async function excluirProduto(id){
    await fetch("http://localhost:3000/produtos/" + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
         },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Não foi possível deletar o produto');
        }
    }).catch(error => {
        console.error(error);
    });
}