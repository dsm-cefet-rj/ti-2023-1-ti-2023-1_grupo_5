import {createStore, createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom";
const initialGeral = {
    fetched: false,
    produto: null,
    produtos: null
};
const url = 'http://localhost:3000';

export const fetchProdutos = createAsyncThunk('geral/fetchProdutos', 
    async () => {
        try {
            let res = await fetch(url + '/produtos');
            res = await res.json();
            return res;        
        } catch (error) {
            console.error(error);
        }
        
    }    
)
    
    export const fetchProduto = createAsyncThunk('geral/fetchProduto', 
    async ({_id}) => {
        try {
            let res = await fetch(url + '/produtos/' + _id);
            res = await res.json();
            return res;        
        } catch (error) {
            console.error(error);
        }

    }    
)

export const geralSlice = createSlice({
    name: "geral",
    initialState: initialGeral,
    reducers: {
        alteraFetched: (state, action) => alteraFetchedReducer(state, action.payload),
    },
    extraReducers: {
        [fetchProdutos.fulfilled]: (state, action) => fulfillfetchProdutosReducer(state, action.payload),
        [fetchProduto.fulfilled]: (state, action) => fulfillfetchProdutoReducer(state, action.payload),
    }
})

function alteraFetchedReducer(state, conta){
    // if(state.fetched == true){
    //     state.fetched = false;
    // }else{
    //     state.fetched = true;
    // }
    //state.fetched = true;
    console.log("nao utilizada");
    return state;
}

function fulfillfetchProdutoReducer(state, payload){
    let s = {
        produto: payload,
        produtos: null,
        fetched:true
    };
    state = s;
    return state;
}

function fulfillfetchProdutosReducer(state, payload){
    let s = {
        produto: null,
        produtos: payload,
        fetched:  false,
    };
    state = s;
    return state;
}

export default geralSlice.reducer;
export const { alteraFetched } = geralSlice.actions;