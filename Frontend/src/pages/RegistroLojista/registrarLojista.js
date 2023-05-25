export default function registrarLojista(emailOk){
    let cnpj = document.getElementById("cnpj");
    let nome = document.getElementById("nome");
    let endereco = document.getElementById("endereco");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let senha1 = document.getElementById("senha1");
    //XX.XXX.XXX/0001-XX length == 18
    if(cnpj.value.length != 18){
        //cnpj.focus();  n funcionou :(
        return console.log("cnpj invalido")
    }
    if(nome.value.length < 3){
        return console.log("nome invalido")
    }
    if(endereco.value.length < 4){
        return console.log("endereço invalido");
    }
    if(tel.value.length != 8){
        console.log(tel.value.length)
        return console.log("telefone invalido");
    }
    if(senha1.value.length < 4){
        return console.log("senha invalida");
    }
    
    const lojista = {
        cnpj: cnpj.value,
        nome: nome.value,
        endereco: endereco.value,
        email: email.value,
        telefone: tel.value,
        senha: senha1.value
    }
    console.log(emailOk);
    if(emailOk == true){
      cadastrarLojista(lojista);
      console.log("cadastrado");
    }else{
      console.log("email invalido");
    }
}

function cadastrarLojista(lojista){
    fetch("http://localhost:3000/lojistas/cadastrarLojista", {
    method: 'POST',    
    headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify(lojista)
    })
}