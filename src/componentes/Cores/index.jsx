import React, { useEffect, useState, useContext } from 'react';
import CheckDescricao from '../CheckDescricao';
import './style.css'
import { CarrinhoContext } from '../../context/ContextCarrinho';


const Cores = ({ filtro, mobile, arrayFiltro }) => {

    const [mostrar, setMostrar] = useState(false);

    const [checkedAmarelo, setCheckedAmarelo] = useState(false);
    const [checkedAzul, setCheckedAzul] = useState(false);
    const [checkedBranco, setCheckedBranco] = useState(false);
    const [checkedCinza, setCheckedCinza] = useState(false);
    const [checkedLaranja, setCheckedLaranja] = useState(false);
    const [checkedVerde, setCheckedVerde] = useState(false);
    const [checkedVermelho, setCheckedVermelho] = useState(false);
    const [checkedPreto, setCheckedPreto] = useState(false);
    const [checkedRosa, setCheckedRosa] = useState(false);
    const [checkedVinho, setCheckedVinho] = useState(false);

    const { cores } = useContext(CarrinhoContext)
    


    useEffect(() => {

        filtro(gerarArrayCores())

    },
        [   
            checkedAmarelo,
            checkedAzul,
            checkedBranco,
            checkedCinza,
            checkedLaranja,
            checkedVerde,
            checkedVermelho,
            checkedPreto,
            checkedRosa,
            checkedVinho
        ])

    useEffect(() => {
        if(cores.length === 0) {
            setCheckedAmarelo(false)
            setCheckedAzul(false)
            setCheckedBranco(false)
            setCheckedCinza(false)
            setCheckedLaranja(false)
            setCheckedVerde(false)
            setCheckedVermelho(false)
            setCheckedPreto(false)
            setCheckedRosa(false)
            setCheckedVinho(false)
        }
    }, [cores])

    const gerarArrayCores = () => {
        let cores = []

        if (checkedAmarelo) {
            cores.push("Amarelo")
        }
        if (checkedAzul) {
            cores.push("Azul")
        }
        if (checkedBranco) {
            cores.push("Branco")
        }
        if (checkedCinza) {
            cores.push("Cinza")
        }
        if (checkedLaranja) {
            cores.push("Laranja")
        }
        if (checkedVerde) {
            cores.push("Verde")
        }
        if (checkedVermelho) {
            cores.push("Vermelho")
        }
        if (checkedPreto) {
            cores.push("Preto")
        }
        if (checkedRosa) {
            cores.push("Rosa")
        }
        if (checkedVinho) {
            cores.push("Vinho")
        }

        return cores;
    }

    if (mobile > 460) {
        return (
            <div className="container-cor">
                <h2 className="titulo-cor">CORES</h2>
                <div>
                    <CheckDescricao checked={checkedAmarelo} setChecked={setCheckedAmarelo} id='cores-1' descricao="Amarelo" />
                    <CheckDescricao checked={checkedAzul} setChecked={setCheckedAzul} id='cores-2' descricao="Azul" />
                    <CheckDescricao checked={checkedBranco} setChecked={setCheckedBranco} id='cores-3' descricao="Branco" />
                    <CheckDescricao checked={checkedCinza} setChecked={setCheckedCinza} id='cores-4' descricao="Cinza" />
                    <CheckDescricao checked={checkedLaranja} setChecked={setCheckedLaranja} id='cores-5' descricao="Laranja" />
                    {!mostrar ? null : (
                        <div>
                            <CheckDescricao checked={checkedVerde} setChecked={setCheckedVerde} id='cores-6' descricao="Verde" />
                            <CheckDescricao checked={checkedVermelho} setChecked={setCheckedVermelho} id='cores-7' descricao="Vermelho" />
                            <CheckDescricao checked={checkedPreto} setChecked={setCheckedPreto} id='cores-8' descricao="Preto" />
                            <CheckDescricao checked={checkedRosa} setChecked={setCheckedRosa} id='cores-9' descricao="Rosa" />
                            <CheckDescricao checked={checkedVinho} setChecked={setCheckedVinho} id='cores-10' descricao="Vinho" />
                        </div>
                    )}
                </div>

                <p className="todas-cores" onClick={() => setMostrar(!mostrar)}>Ver todas as cores</p>

            </div>
        )
    } else {
        return (
            <div className="espacamento">
                <div className="titulo-cor-mobile">
                    <h2 className="titulo-cor">CORES</h2>
                    <h2 className="titulo-cor" onClick={() => setMostrar(!mostrar)}>{mostrar ? "-" : "+"}</h2>
                </div>
                {mostrar ? (
                    <div className="container-select-cores">
                        <CheckDescricao checked={checkedAmarelo} setChecked={setCheckedAmarelo} id='cores-1' descricao="Amarelo" />
                        <CheckDescricao checked={checkedAzul} setChecked={setCheckedAzul} id='cores-1' descricao="Azul" />
                        <CheckDescricao checked={checkedBranco} setChecked={setCheckedBranco} id='cores-1' descricao="Branco" />
                        <CheckDescricao checked={checkedCinza} setChecked={setCheckedCinza} id='cores-1' descricao="Cinza" />
                        <CheckDescricao checked={checkedLaranja} setChecked={setCheckedLaranja} id='cores-1' descricao="Laranja" />
                        <CheckDescricao checked={checkedVerde} setChecked={setCheckedVerde} id='cores-1' descricao="Verde" />
                        <CheckDescricao checked={checkedVermelho} setChecked={setCheckedVermelho} id='cores-1' descricao="Vermelho" />
                        <CheckDescricao checked={checkedPreto} setChecked={setCheckedPreto} id='cores-1' descricao="Preto" />
                        <CheckDescricao checked={checkedRosa} setChecked={setCheckedRosa} id='cores-1' descricao="Rosa" />
                        <CheckDescricao checked={checkedVinho} setChecked={setCheckedVinho} id='cores-1' descricao="Vinho" />
                    </div>
                ) : null
                }
            </div>
        )
    }

}

export default Cores;