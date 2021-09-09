import React, {createContext, useState} from 'react';

export const CarrinhoContext = createContext();


const CarrinhoProvider = ({ children }) => {

    const [cores, setCores] = useState([]);
    const [tamanhos, setTamanhos] = useState([]);
    const [precos, setPrecos] = useState([]);
    const [ordenar, setOrdenar] = useState("recente");
    const [pesquisa, setPesquisa] = useState("")
    const [carrinho, setCarrinho] = useState([])


    return (
        <CarrinhoContext.Provider value={{cores, setCores, tamanhos, setTamanhos, precos, setPrecos, ordenar, setOrdenar, pesquisa, setPesquisa, carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export default CarrinhoProvider;