import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../componentes/Footer';
import { EcommerceContext } from '../../context/ContextEcommerce';
import './style.css'


const PaginaCarrinho = () => {

    const { carrinho, setCarrinho } = useContext(EcommerceContext)
    const [precoTotal, setPrecoTotal] = useState(0)

    useEffect(() => {
        setCarrinho(JSON.parse(localStorage.getItem('cart')))
    }, [])

    useEffect(() => {
        calculaPrecoTotal()
    }, [carrinho])

    const removerProduto = (id) => {
        let arrayProdutoRemovido = []
        let arrayCarrinho = JSON.parse(localStorage.getItem('cart'))
        arrayCarrinho.forEach(item => {
            if (item.id !== id) {
                arrayProdutoRemovido.push(item)
            }
        })
        setCarrinho(arrayProdutoRemovido)
        localStorage.setItem('cart', JSON.stringify(arrayProdutoRemovido))
    }

    const calculaPrecoTotal = () => {
        let valorTotal = 0
        carrinho.forEach((item) => {
            valorTotal += parseFloat(item.preco)
        })
        setPrecoTotal(valorTotal);
    }

    return (
        <div>
            <div className="container-tabela">
                <h1 className="titulo-carrinho">Meu carrinho</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Excluir produto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrinho.map((item) =>
                            <tr key={item.id}>
                                <td>{item.nomeProduto}</td>
                                <td>{item.preco}</td>
                                <td>
                                    <div className="posicao-botao" onClick={() => removerProduto(item.id)}>
                                        <p className="botao-remover">Remover</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {precoTotal === 0 ?
                    <h3 className="preco-total">Preço Total: R$0,00</h3> :
                    <h3 className="preco-total">Preço Total: R${precoTotal},00</h3>}
            </div>
            <div className="posicao-footer">
                <Footer />
            </div>
        </div>
    )
};

export default PaginaCarrinho;