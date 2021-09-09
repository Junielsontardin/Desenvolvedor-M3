import React, { useContext } from 'react';
import { EcommerceContext } from '../../context/ContextEcommerce';
import './style.css'

const CardProduto = ({ produto }) => {

    const { setCarrinho } = useContext(EcommerceContext)

    const adicionarCarrinho = (item) => {
        let arrayCart = JSON.parse(localStorage.getItem("cart"))
        if(!arrayCart) {
            let novoCarrinho = []
            novoCarrinho.push(item)
            localStorage.setItem("cart", JSON.stringify(novoCarrinho))
            setCarrinho((prev) => {
                return [...prev, item]
            })
        } else {
            arrayCart.push(item)
            localStorage.setItem("cart", JSON.stringify(arrayCart))
            setCarrinho((prev) => {
                return [...prev, item]
            })
        }
    }

    return (
        <div className="container-produto">
            <img src={produto.img} alt=""/>
            <div className="container-informacoes">
                <p className="nome">{produto.nomeProduto}</p>
                <div className="container-informacoes">
                    <p className="preco">R$ {produto.preco}</p>
                    <p className="parcela">até {produto.numeroParcela}x de R${(parseFloat(produto.preco) / produto.numeroParcela).toFixed(2)}</p>
                </div>
            </div>
            <button className="botao-comprar" onClick={() => adicionarCarrinho(produto)}>COMPRAR</button>
        </div>
    )
}

export default CardProduto;