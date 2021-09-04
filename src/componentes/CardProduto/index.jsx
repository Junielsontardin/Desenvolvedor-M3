import React from 'react';
import produto from '../../layout/imagens/img_2.png'
import './style.css'

const CardProduto = (props) => {

    return (
        <div className="container-produto">
            <img src={produto} alt=""/>
            <div className="container-informacoes">
                <p className="nome">{props.nome}</p>
                <div className="container-informacoes">
                    <p className="preco">R$ {props.preco}</p>
                    <p className="parcela">até {props.parcela}x de R${(parseFloat(props.preco) / props.parcela).toFixed(2)}</p>
                </div>
            </div>
            <button className="botao-comprar">COMPRAR</button>
        </div>
    )
}

export default CardProduto;