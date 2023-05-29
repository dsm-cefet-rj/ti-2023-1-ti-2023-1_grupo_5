import { createStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
const url = 'http://localhost:3000';
const initialLojista = null;
export const logarContaLojista = createAsyncThunk('lojista/logarContaLojista',
    async ({ email, senha }) => {
        try {
            let res = await fetch(url + '/lojistas/logarLojista', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({email: email, senha: senha})
            });
            res = await res.json();
            return res;        
        } catch (error) {
            console.error(error);
        }

    }
)

export const fetchProdutos = createAsyncThunk('lojista/fetchProdutos',
    async ({ _id }) => {
        try {
            let prod = await fetch(url + '/lojistas/fetchProdutos', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({id_lojista: _id})
            })
            if (prod.ok) {
                prod = await prod.json()
                return prod;
            } else {
                throw new Error("erro")
            }
        } catch (error) {
            console.error(error)
        }
    }
)

export const cadastrarProduto = createAsyncThunk('lojista/cadastrarProduto',
    async ({produto}) => {
        fetch('http://localhost:3000/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao adicionar o produto');
            }
        }).catch(error => console.error(error));

    }
)

export const excluirProduto = createAsyncThunk('lojista/excluirProduto', 
async ({id_lojista, id_produto}) => {
    await fetch("http://localhost:3000/produtos", {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            id_lojista: id_lojista,
            id_produto:  id_produto
        })
    })
})

export const editarProduto = createAsyncThunk('lojista/editarProduto',
    async ({produto}) => {
        fetch("http://localhost:3000/produtos/" + produto._id, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(produto)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ');
            }
        })
    }
)

export const lojistaSlice = createSlice({
    name: "conta",
    initialState: initialLojista,
    reducers: {
        alteraFirstFetched: (state, action) => alteraFirstFetchedReducer(state, action.payload),
        sairContaLojista: (state, action) => sairContaReducer(state, action.payload),
        editarDadosLojista: (state, action) => editarDadosLojistaReducer(state, action.payload),
    },
    extraReducers: {
        [logarContaLojista.fulfilled]: (state, action) => fulfillContaReducer(state, action.payload),
        [fetchProdutos.fulfilled]: (state, action) => fulfillFetchProdutosReducer(state, action.payload),
        [cadastrarProduto.fulfilled]: (state, action) => fulfillCadastrarProdutoReducer(state, action.payload),
        [excluirProduto.fulfilled]: (state, action) => fulfillExcluirProdutoReducer(state, action.payload),
    }
})

function alteraFirstFetchedReducer(stateConta, conta){
    if(stateConta.firstFetched == true){
        stateConta.firstFetched = false;
    }else{
        stateConta.firstFetched = true;
    }
    return stateConta;
}

function sairContaReducer(state, conta){
    return null;
}

function editarDadosLojistaReducer(state, payload){
    let ok = false;

    let r = fetch("http://localhost:3000/lojistas/" + state._id, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(payload)
        }
    ).then( (res) => {
        return res.json();
    });

    /*
    Não entendi por que não funcionou
    deveria retornar state atualizado somente se desse certo.
    */

    // r.then( res => {
    //     if(res.statusCode == 200){
    //         state.nome = payload.nome;
    //         state.telefone = payload.telefone;
    //         state.endereco = payload.endereco;
    //     }
    // })

    state.nome = payload.nome;
    state.telefone = payload.telefone;
    state.endereco = payload.endereco;

    return state;
}

function fulfillCadastrarProdutoReducer(contaState, contaFetched){
    contaState.firstFetched = false;
    return contaState;
}

function fulfillContaReducer(contaState, contaFetched) {
    return contaFetched;
}

function fulfillFetchProdutosReducer(contaState, produtosFetched) {
    contaState.produtos = produtosFetched;
    return contaState;
}

function fulfillExcluirProdutoReducer(contaState, contaFetched){
    contaState.firstFetched = false;
    return contaState;
}

export default lojistaSlice.reducer;
export const { sairContaLojista, alteraFirstFetched, editarDadosLojista } = lojistaSlice.actions;