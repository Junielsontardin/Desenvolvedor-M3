import React, { useState } from 'react';
import CheckDescricao from '../CheckDescricao';
import './style.css'

const Cores = (props) => {

    const [mostrar, setMostrar] = useState(false);


    return (
        <div className="container">
            <h2 className="titulo-cor">CORES</h2>
            <div>
                <CheckDescricao checked={props.checkedAmarelo} setChecked={props.setCheckedAmarelo} id='cores-1' descricao="Amarelo" />
                <CheckDescricao checked={props.checkedAzul} setChecked={props.setCheckedAzul} id='cores-2' descricao="Azul" />
                <CheckDescricao checked={props.checkedBranco} setChecked={props.setCheckedBranco} id='cores-3' descricao="Branco" />
                <CheckDescricao checked={props.checkedCinza} setChecked={props.setCheckedCinza} id='cores-4' descricao="Cinza" />
                <CheckDescricao checked={props.checkedAmarelo} setChecked={props.setCheckedLaranja} id='cores-5' descricao="Laranja" />
                {!mostrar ? null : (
                    <div>
                        <CheckDescricao checked={props.checkedVerde} setChecked={props.setCheckedVerde} id='cores-6' descricao="Verde" />
                        <CheckDescricao checked={props.checkedVermelho} setChecked={props.setCheckedVermelho} id='cores-7' descricao="Vermelho" />
                        <CheckDescricao checked={props.checkedPreto} setChecked={props.setCheckedPreto} id='cores-8' descricao="Preto" />
                        <CheckDescricao checked={props.checkedRosa} setChecked={props.setCheckedRosa} id='cores-9' descricao="Rosa" />
                        <CheckDescricao checked={props.checkedVinho} setChecked={props.setCheckedVinho} id='cores-10' descricao="Vinho" />
                    </div>
                )}
            </div>

            <p className="todas-cores" onClick={() => setMostrar(!mostrar)}>Ver todas as cores</p>

        </div>
    )

}

export default Cores;