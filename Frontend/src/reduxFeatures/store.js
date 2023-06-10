import {configureStore} from "@reduxjs/toolkit"
import contaReducer from "./conta"
import lojistaReducer from "./lojista"
import geralReducer from "./geral"
export const store = configureStore({
    reducer: {
        conta: contaReducer,
        lojista: lojistaReducer,
        geral: geralReducer
    }
})