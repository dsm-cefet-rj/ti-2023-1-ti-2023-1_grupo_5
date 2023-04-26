import {createStore} from "redux"
const initialState = {
    conta: null,
    tipoLogin: null,
    carrinho: null,
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'logarCliente':
            return{
                conta: action.payload,
                tipoLogin: "cliente"
            }
        case 'logarLojista':
            return{
                conta: action.payload,
                tipoLogin: "lojista"
            }
        case 'deslogar':
            return{
                conta: null,
                tipoLogin: null
            }
        default:
            return state;
    }
}

export const store = createStore(reducer)