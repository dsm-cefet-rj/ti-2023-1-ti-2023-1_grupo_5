import {createStore, createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom";
const initialConta = null;

const url = 'http://localhost:3000';

export const logarContaCliente = createAsyncThunk('conta/logarContaCliente', 
    async ({email, senha}) => {
        let conta;
        try {
            conta = await fetch(url + '/contas?email=' + email);
            conta = await conta.json();
            conta = conta[0];
            if(conta){
                if(senha === conta.senha){
                    return {email: conta.email, carrinho: conta.carrinho, tipo: "cliente", id: conta.id};
                }else{
                    console.log("senha incorreta");
                    return null;
                }
            }else{
                throw new Error("Não foi possível encontrar o email: " + email);
            }
        } catch (error) {
            console.error(error)
            return error;
        }

    }
)

export const contaSlice = createSlice({
    name: "conta",
    initialState: initialConta,
    reducers: {
        sairContaCliente : (state, action) => sairContaReducer(state, action.payload),
        adicionarQuantidade : (state, action) => adicionarQuantidadeReducer(state, action.payload),
        retirarQuantidade : (state, action) => retirarQuantidadeReducer(state, action.payload),
        adicionarProduto : (state, action) => adicionarProdutoReducer(state, action.payload),
        excluirProduto : (state, action) => excluirProdutoReducer(state, action.payload),
    },
    extraReducers: {
        [logarContaCliente.fulfilled]: (state, action) => fulfillContaReducer(state, action.payload),
    }
})

function adicionarQuantidadeReducer(state, {id}){
    state.carrinho.map( prod => {
        if(prod.id === id){
            prod.quantidade ++;
        }
    })
    alterarCarrinho(state.id, state.carrinho);
    return state;
}

function retirarQuantidadeReducer(state, {id}){
    state.carrinho.map( prod => {
        if(prod.id === id){
            if(prod.quantidade > 1){
                prod.quantidade --;
            }
        }
    })
    alterarCarrinho(state.id, state.carrinho);
    return state;
}

function excluirProdutoReducer(state, {id}){
    state.carrinho = state.carrinho.filter( prod => {
        return (prod.id != id);   
    })
    alterarCarrinho(state.id, state.carrinho);
    return state;
}

function adicionarProdutoReducer(state, {produto}){
    let existe = false;
    state.carrinho.map( prod => {
        if(prod.id === produto.id){
            prod.quantidade ++;
            alterarCarrinho(state.id, state.carrinho);
            existe = true;
        }
    })
    if(existe == true){
        return state;
    }
    produto.quantidade = 1;
    state.carrinho.push(produto);
    alterarCarrinho(state.id, state.carrinho);
    return state;
}

//utilizada por retiraQuantidade, adicionaQuantidade, excluiProduto e adicionaProduto
function alterarCarrinho(idConta, carrinhoConta){
    const carr = {carrinho: carrinhoConta};
    fetch(url + "/contas/" + idConta, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(carr)
    })
}
function fulfillContaReducer(contaState, contaFetched){
    return contaFetched;
}

function sairContaReducer(state, action){
    state = null;
    return state;
}



export default contaSlice.reducer;
export const { sairContaCliente, sairConta, adicionarQuantidade, retirarQuantidade, excluirProduto, adicionarProduto} = contaSlice.actions;