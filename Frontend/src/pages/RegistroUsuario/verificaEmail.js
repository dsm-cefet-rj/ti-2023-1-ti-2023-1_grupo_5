function  verificaEmailBanco(emailVerif, setEmailOk){
      let e = fetch("http://localhost:3000/clientes/verificaEmail", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: emailVerif})
      }).then((res) => {
        return res.json();
      })
      e.then((res) => {
          //res.stts -> true - já existe email cadastrado    e.stts == false -> email disponivel
          if(res.stts == false){
            console.log("email disponivel");
            setEmailOk(true);
          }else{
            console.log("email ja cadastrado");
            setEmailOk(false);
          }
      })

}

// !!nota!! -> trocar por alguma api que faça verificaçao de email
export default async function verificaEmail(emailVerif, setEmailOk){
    let e;
    if(emailVerif.includes("@") && !emailVerif.includes(" ")){
        let arb = emailVerif.split("@");
        if(arb.length == 2 && arb[0].length > 2){
            if(!arb[0].includes(".")){
                if(arb[1].includes(".")){
                    let ponto = arb[1].split(".");
                    if(ponto[0].length >= 2 && ponto[1].length >= 2){   
                        return verificaEmailBanco(emailVerif, setEmailOk);
                    }
                }
            }
        }
    }
    console.log("formato de email invalido")
    setEmailOk(false);

    /*try {
      e = await fetch("http://localhost:3000/lojistas/verificaEmail", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: emailVerif})
      });
      e = await e.json();
    } catch (error) { console.error(error) }
    //e.stts == true -> já existe email cadastrado    e.stts == false -> email disponivel
    if(e.stts == false){
      console.log("email disponivel");
    }else{
      console.log("email ja cadastrado");
    }*/
  }