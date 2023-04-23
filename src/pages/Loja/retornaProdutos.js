export default async function retornaProdutos(id, setProd){
    return await fetch("http://localhost:3000/produtos?id_lojista="+id)
    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("não foi possivel pegar os produtos")
        }
    }).then(data=>{
        return setProd(data)
    }).catch(error=>{
        console.error(error)
    })
}