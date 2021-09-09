import React, { useContext } from 'react';
import { CarrinhoContext } from '../../context/ContextCarrinho';
import './style.css'

const InputPesquisa = () => {

    const { pesquisa, setPesquisa } = useContext(CarrinhoContext)

    return (
        <div className="container-input-pesquisa">
            <input className="input-pesquisa" placeholder="Pesquisar produto..." type="text" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} />
        </div>
    )

}

export default InputPesquisa;