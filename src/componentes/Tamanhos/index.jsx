import React from 'react';
import CheckTamanho from '../CheckTamanho';
import './style.css'

const Tamanhos = () => {

    return (
        <div className="container-tamanhos">
            <h2 className="titulo">TAMANHOS</h2>
            <div >
                <div className="row-tamanhos">
                    <CheckTamanho tamanho="P"/>
                    <CheckTamanho tamanho="M"/>
                    <CheckTamanho tamanho="G"/>
                    <CheckTamanho tamanho="GG"/>
                </div>
                <div className="row-tamanhos">
                    <CheckTamanho tamanho="U"/>
                    <CheckTamanho tamanho="36"/>
                    <CheckTamanho tamanho="38"/>
                    <CheckTamanho tamanho="40"/>
                </div>
                <div className="row-tamanhos">
                    <CheckTamanho tamanho="42"/>
                    <CheckTamanho tamanho="44"/>
                    <CheckTamanho tamanho="46"/>
                </div>
            </div>
        </div>
    )
}

export default Tamanhos;