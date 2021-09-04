import React, { useEffect, useState } from 'react';
import './style.css'

const CheckDescricao = (props) => {


    const selecionado = () => {

        if(!props.checked) {
            props.setChecked(true)
        } else {
            props.setChecked(false)
        }

    }

    return (
        <div className="check-descricao" onClick={selecionado}>
            <input id={props.id} type="checkbox" className="checkbox"/>
            <label htmlFor={props.id} className="descricao">{props.descricao}</label>
        </div>
    )

}

export default CheckDescricao;