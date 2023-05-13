export default async function retornaProdutos(setProd) {
    
    let p = await fetch('http://localhost:3000/produtos')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao pegar produtos');
            }
        }).then(data =>{
            return setProd(data);
        })
        .catch(error => {
            console.error('Erro ao pegar produtos:', error);
        });
    return p;
}