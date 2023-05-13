import React from 'react'
import p from './Dados'
import Produto from "./Produto/ProdutoNovidade"

const ProdutoSimples = () => {
  return (
    <div>
        <div class="single-image">
           <img src={p[0].img} />
            <Produto produto={p[0]}/>
            <h1>{p.preco}</h1>
            <h1>{p[3].preco}</h1>
            <h1>{p[3].descricao}</h1>
            <h1>{p[0].caracteristicas}</h1>
            
            
                    
                   
        
                    
        </div>
    </div>
  )
}

export default ProdutoSimples