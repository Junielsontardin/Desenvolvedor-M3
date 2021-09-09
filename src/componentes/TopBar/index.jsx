import React, { useContext, useState } from 'react';
import './style.css'
import Cores from '../Cores'
import Tamanhos from '../Tamanhos';
import FaixaPreco from '../FaixaPreco';
import IconeFechar from '../../layout/imagens/icon-x.png';
import { CarrinhoContext } from '../../context/ContextCarrinho';
import InputPesquisa from '../InputPesquisa';

const TopBar = ({ mobile }) => {

    const [clickedFilter, setClickedFilter] = useState(false);
    const [clickedOrder, setClickedOrder] = useState(false)

    const { setCores, setPrecos, setTamanhos, setOrdenar, pesquisa, setPesquisa } = useContext(CarrinhoContext)

    const limparFiltros = () => {
        setCores([])
        setPrecos([])
        setTamanhos([])
    }

    const order = (value) => {
        setOrdenar(value)
        setClickedOrder(false)
    }

    if (mobile > 460) {

        return (
            <div className="container-topbar">
                <div className="topbar">
                    <h1 className="titulo-item">Blusas</h1>
                    <div>
                        <div>
                            <select onChange={(e) => setOrdenar(e.target.value)} className="select">
                                <option disabled selected value="recente">Ordenar por:</option>
                                <option value="recente">Mais recentes</option>
                                <option value="menor">Menor preço</option>
                                <option value="maior">Maior preço</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container-topbar">
                <h1>Blusas</h1>
                <div className="topbar">
                    <div onClick={() => setClickedFilter(!clickedFilter)} className="box-filtro">
                        <p>Filtrar</p>
                    </div>
                    <div onClick={() => setClickedOrder(!clickedOrder)} className="box-ordenar">
                        <p>Ordenar</p>
                    </div>
                </div>
                <InputPesquisa />
                <div className={clickedFilter ? "filtros-ordenar filtros-ordenar-aparecer" : "filtros-ordenar"}>
                    <div>
                        <div className="container-titulo-filtrar">
                            <h2 className="titulo-filtrar">FILTRAR</h2>
                            <img onClick={() => setClickedFilter(!clickedFilter)} className="icon-fechar" src={IconeFechar} />
                        </div>
                        <div className="linha-divisao" />
                        <div>
                            <Cores mobile={mobile} filtro={setCores} />
                            <Tamanhos mobile={mobile} filtro={setTamanhos} />
                            <FaixaPreco mobile={mobile} filtro={setPrecos} />
                        </div>
                    </div>
                    <div className="position-botoes">
                        <div className="container-botoes">
                            <div className="botao-aplicar">
                                <p>APLICAR</p>
                            </div>
                            <div onClick={limparFiltros} className="botao-limpar">
                                <p>LIMPAR</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={clickedOrder ? "filtros-ordenar filtros-ordenar-aparecer" : "filtros-ordenar"}>
                <div>
                        <div className="container-titulo-filtrar">
                            <h2 className="titulo-filtrar">ORDENAR</h2>
                            <img onClick={() => setClickedOrder(!clickedOrder)} className="icon-fechar" src={IconeFechar} />
                        </div>
                        <div className="linha-divisao" />
                        <div className="container-opcoes">
                            <p onClick={() => order("recente")}>Mais recentes</p>
                            <p onClick={() => order("menor")}>Menor preço</p>
                            <p onClick={() => order("maior")}>Maior preço</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TopBar;