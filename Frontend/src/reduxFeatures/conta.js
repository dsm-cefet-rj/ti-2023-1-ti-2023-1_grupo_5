import {createStore, createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom";
const initialConta = null;
const url = 'http://localhost:3000';


export const logarContaCliente = createAsyncThunk('conta/logarContaCliente', 
    async ({ email, senha }) => {
        let contaReq = {
            username : email,
            password : senha
        };
        try {
            let res = await fetch(url + '/clientes/login', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(contaReq)
            });
            res = await res.json();

            let c = await fetch( url + '/carrinhos/' + res.idCarrinho, 
            { headers: { Authorization: 'Bearer ' + res.token } } );

            c = await c.json();
            
            res.carrinho = c;
            return res;        
        } catch (error) {
            console.error(error);
        }

    }    
)


export const registrarContaCliente = createAsyncThunk('conta/registrarContaCliente', 
    async ({ email, senha }) => {
        let contaReq = {
            username : email,
            password : senha
        };
        try {
            let res = await fetch(url + '/clientes', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(contaReq)
            });
            res = await res.json();
            return res;        
        } catch (error) {
            console.error(error);
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
        processarCompra : (state, action) => processarCompraReducer(state, action.payload),
    },
    extraReducers: {
        [logarContaCliente.fulfilled]: (state, action) => fulfillContaReducer(state, action.payload),
        [registrarContaCliente.fulfilled]: (state, action) => fulfillRegistrarContaReducer(state, action.payload),
    }
})

function processarCompraReducer(state, payload){
    if(state.carrinho.length != 0){
        state.carrinho = [];
        alterarCarrinho(state.carrinho, state.idCarrinho, state.token);
        alert("Compra realizada!");
    }
    return state;
}

function adicionarQuantidadeReducer(state, {_id}){
    state.carrinho.map( prod => {
        if(prod.produto._id === _id){
            prod.quantidade ++;
        }
    })
    alterarCarrinho(state.carrinho, state.idCarrinho, state.token);
    return state;
}

function retirarQuantidadeReducer(state, {_id}){
    state.carrinho.map( prod => {
        if(prod.produto._id === _id){
            if(prod.quantidade > 1){
                prod.quantidade --;
            }
        }
    })
    alterarCarrinho(state.carrinho, state.idCarrinho, state.token);
    return state;
}

function excluirProdutoReducer(state, {_id}){
    state.carrinho = state.carrinho.filter( prod => {
        return (prod.produto._id != _id);   
    })
    alterarCarrinho(state.carrinho, state.idCarrinho, state.token);
    return state;
}

function adicionarProdutoReducer(state, {produto}){
    let existe = false;
    let produtoAux = Object.assign({}, produto);
    produtoAux = {produto: produtoAux};
    
    state.carrinho.map( prod => {
        if(prod.produto._id === produtoAux.produto._id){
            prod.quantidade ++;
            alterarCarrinho(state.carrinho, state.idCarrinho, state.token);
            existe = true;
        }
    })
    if(existe == true){
        return state;
    }
    produtoAux.quantidade = 1;
    state.carrinho.push(produtoAux);
    alterarCarrinho(state.carrinho, state.idCarrinho, state.token);
    return state;
}

//utilizada por retiraQuantidade, adicionaQuantidade, excluiProduto e adicionaProduto
function alterarCarrinho(carrinho, idCarrinho, token){
    fetch(url + `/carrinhos/${idCarrinho}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(carrinho)
    })
}

function fulfillContaReducer(contaState, contaFetched){
    return contaFetched;
}

function sairContaReducer(state, action){
    state = null;
    return state;
}

function fulfillRegistrarContaReducer(state, action){
    return state;
}



export default contaSlice.reducer;
export const { 

    sairContaCliente, 
    sairConta, 
    adicionarQuantidade,
    retirarQuantidade, 
    excluirProduto, 
    adicionarProduto,
    processarCompra

} = contaSlice.actions;