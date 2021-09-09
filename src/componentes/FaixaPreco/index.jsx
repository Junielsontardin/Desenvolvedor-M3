import React, { useEffect, useState, useContext } from 'react';
import CheckDescricao from '../CheckDescricao';
import { CarrinhoContext } from '../../context/ContextCarrinho';
import './style.css';

const FaixaPreco = ({ filtro, mobile }) => {

    const [checked0e50, setChecked0e50] = useState(false);
    const [checked51e150, setChecked51e150] = useState(false);
    const [checked151e300, setChecked151e300] = useState(false);
    const [checked301e500, setChecked301e500] = useState(false);
    const [checkedMaior500, setCheckedMaior500] = useState(false);

    const [mostrar, setMostrar] = useState(false);

    const { precos } = useContext(CarrinhoContext)

    useEffect(() => {

        filtro(gerarObjPreco())

    },
        [
            checked0e50,
            checked51e150,
            checked151e300,
            checked301e500,
            checkedMaior500

        ])

    useEffect(() => {
        if (precos.length === 0) {
            setChecked0e50(false)
            setChecked51e150(false)
            setChecked151e300(false)
            setChecked301e500(false)
            setCheckedMaior500(false)
        }
    }, [precos])

    const gerarObjPreco = () => {
        let precos = []

        if (checked0e50) {
            let preco = {
                maior: 0,
                menor: 51
            }
            precos.push(preco)
        }
        if (checked51e150) {
            let preco = {
                maior: 50,
                menor: 151
            }
            precos.push(preco)
        }
        if (checked151e300) {
            let preco = {
                maior: 150,
                menor: 301
            }
            precos.push(preco)
        }
        if (checked301e500) {
            let preco = {
                maior: 300,
                menor: 501
            }
            precos.push(preco)
        }
        if (checkedMaior500) {
            let preco = {
                maior: 500,
                menor: 999999
            }
            precos.push(preco)
        }

        return precos;
    }

    return (
        <div className="espacamento">
            {mobile > 460 ? <h2 className="titulo-preco">FAIXA DE PREÇO</h2>
                : <div className="titulo-preco-mobile">
                    <h2 className="titulo-preco">FAIXA DE PREÇO</h2>
                    <h2 className="titulo-preco" onClick={() => setMostrar(!mostrar)}>{mostrar ? "-" : "+"}</h2>
                </div>}
            {mobile > 460 || mostrar ?
                <div className="container-select-precos">
                    <CheckDescricao checked={checked0e50} setChecked={setChecked0e50} id='preco-1' descricao="de R$0 ate R$50" />
                    <CheckDescricao checked={checked51e150} setChecked={setChecked51e150} id='preco-2' descricao="de R$51 ate R$150" />
                    <CheckDescricao checked={checked151e300} setChecked={setChecked151e300} id='preco-3' descricao="de R$151 ate R$300" />
                    <CheckDescricao checked={checked301e500} setChecked={setChecked301e500} id='preco-4' descricao="de R$301 ate R$500" />
                    <CheckDescricao checked={checkedMaior500} setChecked={setCheckedMaior500} id='preco-5' descricao="a partir de R$501" />
                </div> : null}
        </div>
    )
}

export default FaixaPreco;