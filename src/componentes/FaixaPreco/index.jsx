import React from 'react';
import CheckDescricao from '../CheckDescricao';
import './style.css';

const FaixaPreco = () => {

    return (
        <div>
            <h2 className="titulo">FAIXA DE PREÇO</h2>
            <div>
                <CheckDescricao id='preco-1' descricao="de R$0 ate R$50"/>
                <CheckDescricao id='preco-2' descricao="de R$51 ate R$150"/>
                <CheckDescricao id='preco-3' descricao="de R$151 ate R$300"/>
                <CheckDescricao id='preco-4' descricao="de R$301 ate R$500"/>
                <CheckDescricao id='preco-5' descricao="a partir de R$501"/>
            </div>
        </div>
    )
}

export default FaixaPreco;