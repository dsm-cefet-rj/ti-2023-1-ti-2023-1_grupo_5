export default async function retornaProduto(id) {
    try {
        let p = await fetch("http://localhost:3000/produtos?id=" + id);
        if(p.ok){
            p = await p.json();
            p = p[0];
            return p;
        }else{
            throw new Error("Não foi possível resgatar o produto.");
        }
    } catch (error) {
        console.error(error);
    }
    return ;
}