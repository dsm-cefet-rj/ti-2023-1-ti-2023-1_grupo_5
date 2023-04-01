import { createContext,useContext, useEffect, useState } from "react"
import Produto from "../components/Produto/Produto"
import {p} from "../components/Dados"


export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState({})
    useEffect(()=>{
        const carrinhoLocal = window.localStorage.getItem('carrinho')
        if(carrinhoLocal){
            setCarrinho(JSON.parse(carrinhoLocal))
        }
    },[])
    const addCarrinho = Produto => {
        setCarrinho(old => {
            let quantidade = 0
            if(old [Produto.id]){
                quantidade = old [Produto.id].quantidade
            }
            const newCarrinho = {
            
           ...old,
            [Produto.id]: {
                quantidade: quantidade+1,
                Produto,
            },
        }
        window.localStorage.setItem('carrinho',JSON.stringify(newCarrinho))
        return newCarrinho
    })
    }
    const removeFromCarrinho = (ProdutoID)=>{
        setCarrinho((old) => {
            const newCarrinho = {}
            Object.keys(old).forEach((id) =>{
                if(id !== ProdutoID){
                    newCarrinho[id] = old[id]
                }
            })
            window.localStorage.setItem('carrinho',JSON.stringify(newCarrinho))
            return newCarrinho
        })
    }

    const alterarQuantidade = (ProdutoID, novaQuantidade) => {
        setCarrinho((old) => {
            const newCarrinho = {}
            Object.keys(old).forEach((id) =>{
                const novoProduto = {...old[id]}
                if(id === ProdutoID){
                    novoProduto.quantidade = novaQuantidade
                }
                newCarrinho[id] = novoProduto
            })
            window.localStorage.setItem('carrinho',JSON.stringify(newCarrinho))
            return newCarrinho
        })
    }
    
    return (
        <CarrinhoContext.Provider value = {{carrinho, addCarrinho, removeFromCarrinho, alterarQuantidade}}> {children} </CarrinhoContext.Provider>
    )
}

export const useCarrinho = () => {
    const carrinho = useContext(CarrinhoContext)
    return carrinho
}