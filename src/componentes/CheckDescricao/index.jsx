import React, { useContext, useState } from 'react';
import { CarrinhoContext } from '../../context/ContextCarrinho';
import './style.css'

const CheckDescricao = ( props ) => {

    return (
        <div className="check-descricao" onClick={() => props.setChecked(!props.checked)}>
            <div className="box-select">
                <div className={props.checked ? "box-checked" : ""}></div>
            </div>
            <p htmlFor={props.id} className="descricao">{props.descricao}</p>
        </div>
    )

}

export default CheckDescricao;