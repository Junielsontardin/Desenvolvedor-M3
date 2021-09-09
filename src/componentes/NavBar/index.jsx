import React, { useContext } from 'react';
import Logo from '../../layout/imagens/logo-m3.png'
import Bag from '../../layout/imagens/shopping-bag.png'
import { Link } from 'react-router-dom'
import './style.css'
import { useEffect, useState } from 'react/cjs/react.development';
import { CarrinhoContext } from '../../context/ContextCarrinho';

const NavBar = () => {

    const [itensCarrinho, setItensCarrinho] = useState(0)

    const { carrinho } = useContext(CarrinhoContext);

    useEffect(() => {
        setItensCarrinho(carrinho.length)
    }, [carrinho])

    return (
        <div>
            <div className="container-navbar">
                <div className="navbar">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    <Link to="/carrinho">
                        <div className="container-itens-carrinho">
                            <img src={Bag} alt="" className="bag" />
                            <div className="itens-carrinho">
                                <p>{itensCarrinho}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="divisao"></div>
        </div>
    )
}

export default NavBar;