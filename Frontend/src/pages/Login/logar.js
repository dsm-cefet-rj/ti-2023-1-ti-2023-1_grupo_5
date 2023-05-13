export default async function logarLojista(email, senha, tipo){
    console.log("tipo " + tipo)
    const conta = await fetch('http://localhost:3000/' + tipo + '?email=' + email)
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error("Erro ao resgatar as contas")
        }
    }).then(data => {
        return data
    })
    .catch(error => {
        console.log(error)
        return null
    })
    if(senha === conta[0].senha){
        if(tipo == "contas"){return (
            {
                email: conta[0].email,
                id_carrinho: conta[0].id_carrinho,
                id:conta[0].id
            }
        )
    }else{
        return(
            {
                id: conta[0].id,
                cnpj: conta[0].cnpj,
                nome: conta[0].nome,
                endereco: conta[0].endereco,
                email: conta[0].email
            }
        )
    }
    }
    return null
}