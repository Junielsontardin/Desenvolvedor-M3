import React, { useEffect, useState } from 'react';
import Cores from '../../componentes/Cores';
import Tamanhos from '../../componentes/Tamanhos';
import FaixaPreco from '../../componentes/FaixaPreco';
import CardProduto from '../../componentes/CardProduto';
import './style.css'

const todosProdutos = [
    {
        id: 1,
        nomeProduto: 'CAMISETA MESCLA',
        cor: 'Amarelo',
        tamanho: 'P',
        preco: '28,00',
        numeroParcela: 3
    },
    {
        id: 2,
        nomeProduto: 'SAIA EM COURO',
        cor: 'Azul',
        tamanho: 'M',
        preco: '398,00',
        numeroParcela: 5
    },
    {
        id: 3,
        nomeProduto: 'CARDIGAN TIGRE',
        cor: 'Branco',
        tamanho: 'M',
        preco: '398,00',
        numeroParcela: 5
    },
    {
        id: 4,
        nomeProduto: 'CARDIGAN OFF WHITE',
        cor: 'Cinza',
        tamanho: 'M',
        preco: '99,00',
        numeroParcela: 3
    },
    {
        id: 5,
        nomeProduto: 'BODY LEOPARDO',
        cor: 'Laranja',
        tamanho: 'M',
        preco: '129,90',
        numeroParcela: 3
    },
    {
        id: 6,
        nomeProduto: 'CASACO PELOS',
        cor: 'Verde',
        tamanho: 'M',
        preco: '398,00',
        numeroParcela: 5
    },
    {
        id: 7,
        nomeProduto: 'CROPPED STRIPES',
        cor: 'Vermelho',
        tamanho: 'M',
        preco: '120,00',
        numeroParcela: 3
    },
    {
        id: 8,
        nomeProduto: 'CAMISA TRANSPARENTE',
        cor: 'Preto',
        tamanho: 'M',
        preco: '398,00',
        numeroParcela: 5
    },
    {
        id: 9,
        nomeProduto: 'POCHETE CLUTCH',
        cor: 'Rosa',
        tamanho: 'M',
        preco: '99,00',
        numeroParcela: 3
    },
]

const PaginaProdutos = () => {

    const [produtos, setProdutos] = useState([]);
    const [filtrados, setFiltrados] = useState([])

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

    useEffect(() => {
        setProdutos(todosProdutos)
        setFiltrados(todosProdutos)
    }, [])

    return (
        <div className="container-principal">
            <div>
                <Cores
                    checkedAmarelo={checkedAmarelo}
                    checkedAzul={checkedAzul}
                    checkedBranco={checkedBranco}
                    checkedCinza={checkedCinza}
                    checkedLaranja={checkedLaranja}
                    checkedVerde={checkedVerde}
                    checkedVermelho={checkedVermelho}
                    checkedPreto={checkedPreto}
                    checkedRosa={checkedRosa}
                    checkedVinho={checkedVinho}

                    setCheckedAmarelo={setCheckedAmarelo}
                    setCheckedAzul={setCheckedAzul}
                    setCheckedBranco={setCheckedBranco}
                    setCheckedCinza={setCheckedCinza}
                    setCheckedLaranja={setCheckedLaranja}
                    setCheckedVerde={setCheckedVerde}
                    setCheckedVermelho={setCheckedVermelho}
                    setCheckedPreto={setCheckedPreto}
                    setCheckedRosa={setCheckedRosa}
                    setCheckedVinho={setCheckedVinho}
                    />

                <Tamanhos />
                <FaixaPreco />
            </div>
            <div className="container-produtos">
                <div className="lista-produtos">
                    {filtrados.map((item) =>
                    <CardProduto key={item.id} nome={item.nomeProduto} cor={item.cor} tamanho={item.tamanho} preco={item.preco} parcela={item.numeroParcela}/>)}
                </div>
            </div>
            <button onClick={() => console.log(checkedAmarelo)}>OLA</button>
        </div>
    )
}

export default PaginaProdutos;