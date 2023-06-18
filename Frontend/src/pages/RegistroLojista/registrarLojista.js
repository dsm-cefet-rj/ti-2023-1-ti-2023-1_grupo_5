export default function registrarLojista(emailOk, setError){
    let cnpj = document.getElementById("cnpj");
    let nome = document.getElementById("nome");
    let endereco = document.getElementById("endereco");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let senha1 = document.getElementById("senha1");
    //XX.XXX.XXX/0001-XX length == 18
    if(cnpj.value.length != 18){
        //cnpj.focus();  n funcionou :(
        return setError("O cnpj deve ter o formato XX.XXX.XXX/0001-XX.");
    }
    if(nome.value.length < 3){
        return setError("O nome deve conter ao menos 3 caracteres.");
    }
    if(endereco.value.length < 4){
        return setError("O endereço deve conter ao menos 4 caracteres.");
    }
    if(tel.value.length != 8){
        return setError("O telefone deve conter ao menos 8 caracteres.");
    }
    if(senha1.value.length < 3){
        return setError("A senha deve conter ao menos 3 caracteres");
    }
    
    const lojista = {
        cnpj: cnpj.value,
        nome: nome.value,
        endereco: endereco.value,
        email: email.value,
        telefone: tel.value,
        senha: senha1.value
    }

    if(emailOk == true){
      cadastrarLojista(lojista);
      setError("");
      alert("Usuário cadastrado.");
      return true;
    }else{
      alert("E-mail inválido.");
    }
}

function cadastrarLojista(lojista){
    fetch("http://localhost:3000/lojistas", {
    method: 'POST',    
    headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify(lojista)
    })
}