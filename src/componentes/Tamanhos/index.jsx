import React, { useState, useEffect } from 'react';
import CheckTamanho from '../CheckTamanho';
import './style.css'

const Tamanhos = ({ filtro, mobile }) => {

    const [checkedP, setCheckedP] = useState(false);
    const [checkedM, setCheckedM] = useState(false);
    const [checkedG, setCheckedG] = useState(false);
    const [checkedGG, setCheckedGG] = useState(false);
    const [checkedU, setCheckedU] = useState(false);
    const [checked36, setChecked36] = useState(false);
    const [checked38, setChecked38] = useState(false);
    const [checked40, setChecked40] = useState(false);
    const [checked42, setChecked42] = useState(false);
    const [checked44, setChecked44] = useState(false);
    const [checked46, setChecked46] = useState(false);

    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {

        filtro(gerarArrayTamanhos())

    },
        [
            checkedP,
            checkedM,
            checkedG,
            checkedGG,
            checkedU,
            checked36,
            checked38,
            checked40,
            checked42,
            checked44,
            checked46
        ])

    const gerarArrayTamanhos = () => {
        let tamanhos = []

        if (checkedP) {
            tamanhos.push("P")
        }
        if (checkedM) {
            tamanhos.push("M")
        }
        if (checkedG) {
            tamanhos.push("G")
        }
        if (checkedGG) {
            tamanhos.push("GG")
        }
        if (checkedU) {
            tamanhos.push("U")
        }
        if (checked36) {
            tamanhos.push("36")
        }
        if (checked38) {
            tamanhos.push("38")
        }
        if (checked40) {
            tamanhos.push("40")
        }
        if (checked42) {
            tamanhos.push("42")
        }
        if (checked44) {
            tamanhos.push("44")
        }
        if (checked46) {
            tamanhos.push("46")
        }

        return tamanhos;
    }

    return (
        <div className="container-tamanhos">
            {mobile > 460 ? <h2 className="titulo-tamanho">TAMANHOS</h2>
                : <div className="titulo-tamanho-mobile">
                    <h2 className="titulo-tamanho">TAMANHOS</h2>
                    <h2 className="titulo-tamanho" onClick={() => setMostrar(!mostrar)}>{mostrar ? "-" : "+"}</h2>
                </div>}
            {mobile > 460 || mostrar ?
                <div className="container-select-tamanhos">

                    <CheckTamanho checked={checkedP} setChecked={setCheckedP} tamanho="P" />
                    <CheckTamanho checked={checkedM} setChecked={setCheckedM} tamanho="M" />
                    <CheckTamanho checked={checkedG} setChecked={setCheckedG} tamanho="G" />
                    <CheckTamanho checked={checkedGG} setChecked={setCheckedGG} tamanho="GG" />
                    <CheckTamanho checked={checkedU} setChecked={setCheckedU} tamanho="U" />
                    <CheckTamanho checked={checked36} setChecked={setChecked36} tamanho="36" />
                    <CheckTamanho checked={checked38} setChecked={setChecked38} tamanho="38" />
                    <CheckTamanho checked={checked40} setChecked={setChecked40} tamanho="40" />
                    <CheckTamanho checked={checked42} setChecked={setChecked42} tamanho="42" />
                    <CheckTamanho checked={checked44} setChecked={setChecked44} tamanho="44" />
                    <CheckTamanho checked={checked46} setChecked={setChecked46} tamanho="46" />

                </div> : null}
        </div>
    )
}

export default Tamanhos;