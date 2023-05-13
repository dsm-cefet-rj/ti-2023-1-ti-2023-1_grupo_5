import {configureStore} from "@reduxjs/toolkit"
import contaReducer from "./conta"
import lojistaReducer from "./lojista"
export const store = configureStore({
    reducer: {
        conta: contaReducer,
        lojista: lojistaReducer
    }
})