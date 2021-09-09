import React, {useState} from 'react';
import './style.css'

const CheckTamanho = (props) => {

    return (
        <div className={props.checked ? "box-clicked" : "box"} onClick={() => props.setChecked(!props.checked)}>
            <p className="tamanho">{props.tamanho}</p>
        </div>
    )
}

export default CheckTamanho;