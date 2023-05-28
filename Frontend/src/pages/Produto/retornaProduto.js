export default async function retornaProduto(id) {
    try {
        let p = await fetch("http://localhost:3000/produtos/" + id);
        if(p.ok){
            p = await p.json();
            return p;
        }else{
            throw new Error("Não foi possível resgatar o produto.");
        }
    } catch (error) {
        console.error(error);
    }
    return ;
}