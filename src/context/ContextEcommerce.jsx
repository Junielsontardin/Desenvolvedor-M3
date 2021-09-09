import React, {createContext, useState} from 'react';

export const EcommerceContext = createContext();


const EcommerceProvider = ({ children }) => {

    const [cores, setCores] = useState([]);
    const [tamanhos, setTamanhos] = useState([]);
    const [precos, setPrecos] = useState([]);
    const [ordenar, setOrdenar] = useState("recente");
    const [pesquisa, setPesquisa] = useState("")
    const [carrinho, setCarrinho] = useState([])


    return (
        <EcommerceContext.Provider 
        value={{
            cores, setCores, 
            tamanhos, setTamanhos, 
            precos, setPrecos, 
            ordenar, setOrdenar, 
            pesquisa, setPesquisa, 
            carrinho, setCarrinho
            }}>
            {children}
        </EcommerceContext.Provider>
    )
}

export default EcommerceProvider;