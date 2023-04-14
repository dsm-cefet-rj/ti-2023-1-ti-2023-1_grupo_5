export default async function retornaProduto(id, setProd) {
    await fetch("http://localhost:3000/produtos/" + id)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao pegar produto');
            }
        }).then(data =>{
            console.log(data)
            return setProd(data);
        })
        .catch(error => {
            console.error('Erro ao pegar produto:', error);
        });
}