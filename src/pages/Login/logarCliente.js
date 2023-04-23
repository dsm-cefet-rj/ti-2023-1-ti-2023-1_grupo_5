export default async function logar(email, senha){
    const conta = await fetch('http://localhost:3000/contas?email=' + email)
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
    console.log(conta[0].email)
    if(senha === conta[0].senha){
        return ({email: conta[0].email})
    }
    return null
}