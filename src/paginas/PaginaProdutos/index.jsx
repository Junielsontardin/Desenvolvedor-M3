import React, { useContext, useEffect, useState } from 'react';
import Cores from '../../componentes/Cores';
import Tamanhos from '../../componentes/Tamanhos';
import FaixaPreco from '../../componentes/FaixaPreco';
import CardProduto from '../../componentes/CardProduto';
import './style.css'
import TopBar from '../../componentes/TopBar';
import { CarrinhoContext } from '../../context/ContextCarrinho';
import img2 from '../../layout/imagens/img_2.png'
import img3 from '../../layout/imagens/img_3.png'
import img4 from '../../layout/imagens/img_4.png'
import img5 from '../../layout/imagens/img_5.png'
import img6 from '../../layout/imagens/img_6.png'
import img7 from '../../layout/imagens/img_7.png'
import img8 from '../../layout/imagens/img_8.png'
import img9 from '../../layout/imagens/img_9.png'
import img10 from '../../layout/imagens/img_10.png'
import InputPesquisa from '../../componentes/InputPesquisa';
import Footer from '../../componentes/Footer'


const PaginaProdutos = () => {

    const todosProdutos = [
        {
            id: 1,
            nomeProduto: 'CAMISETA MESCLA',
            cor: 'Amarelo',
            tamanho: 'P',
            preco: '28,00',
            numeroParcela: 3,
            data: '2021-08-15',
            img: img2
        },
        {
            id: 2,
            nomeProduto: 'SAIA EM COURO',
            cor: 'Azul',
            tamanho: 'M',
            preco: '398,00',
            numeroParcela: 5,
            data: '2021-08-16',
            img: img3
        },
        {
            id: 3,
            nomeProduto: 'CARDIGAN TIGRE',
            cor: 'Branco',
            tamanho: 'M',
            preco: '398,00',
            numeroParcela: 5,
            data: '2021-08-17',
            img: img4
        },
        {
            id: 4,
            nomeProduto: 'CARDIGAN OFF WHITE',
            cor: 'Cinza',
            tamanho: 'M',
            preco: '99,00',
            numeroParcela: 3,
            data: '2021-08-18',
            img: img5
        },
        {
            id: 5,
            nomeProduto: 'BODY LEOPARDO',
            cor: 'Laranja',
            tamanho: 'M',
            preco: '129,90',
            numeroParcela: 3,
            data: '2021-09-05',
            img: img6
        },
        {
            id: 6,
            nomeProduto: 'CASACO PELOS',
            cor: 'Verde',
            tamanho: 'M',
            preco: '398,00',
            numeroParcela: 5,
            data: '2021-02-01',
            img: img7
        },
        {
            id: 7,
            nomeProduto: 'CROPPED STRIPES',
            cor: 'Vermelho',
            tamanho: 'G',
            preco: '120,00',
            numeroParcela: 3,
            data: '2021-08-09',
            img: img8
        },
        {
            id: 8,
            nomeProduto: 'CAMISA TRANSPARENTE',
            cor: 'Preto',
            tamanho: 'GG',
            preco: '398,00',
            numeroParcela: 5,
            data: '2021-03-15',
            img: img9
        },
        {
            id: 9,
            nomeProduto: 'POCHETE CLUTCH',
            cor: 'Rosa',
            tamanho: 'P',
            preco: '99,00',
            numeroParcela: 3,
            data: '2021-05-16',
            img: img10
        },
    ]


    const [produtos, setProdutos] = useState(todosProdutos);
    const [filtrados, setFiltrados] = useState([]);
    const [carregarMais, setCarregarMais] = useState(true);
    const [maisProdutos, setMaisProdutos] = useState(3);

    const {
        cores, setCores,
        tamanhos, setTamanhos,
        precos, setPrecos,
        ordenar, setOrdenar,
        pesquisa, setPesquisa } = useContext(CarrinhoContext)

    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    useEffect(() => {

        ordernarProdutos(filtroGeral(produtos));

    }, [cores, tamanhos, precos, ordenar, pesquisa, maisProdutos])

    const pesquisaProduto = (produtos) => {
        let filtro = []
        produtos.forEach((item) => {
            if (item.nomeProduto.includes(pesquisa.toUpperCase())) {
                filtro.push(item)
            }
        })
        return filtro;
    }

    const carregarMaisProdutos = (arrayFiltrado) => {
        let array = arrayFiltrado.slice(0, maisProdutos)
        if (arrayFiltrado.length === array.length) {
            setCarregarMais(false)
        } else {
            setCarregarMais(true)
        }
    }

    const filtroCor = (produtos) => {
        let filtro = []
        produtos.forEach(produto => {
            if (cores.length === 0) {
                filtro.push(produto)
            } else {
                cores.forEach(corFiltro => {
                    if (produto.cor === corFiltro) {
                        filtro.push(produto)
                    }
                })
            }
        })
        return filtro;
    }

    const filtroTamanho = (produtos) => {
        let filtro = []
        produtos.forEach(produto => {
            if (tamanhos.length === 0) {
                filtro.push(produto)
            } else {
                tamanhos.forEach(tamanhoFiltro => {
                    if (produto.tamanho === tamanhoFiltro) {
                        filtro.push(produto)
                    }
                })
            }
        })
        return filtro;
    }

    const filtroPreco = (produtos) => {
        let filtro = []
        produtos.forEach(produto => {
            if (precos.length === 0) {
                filtro.push(produto)
            } else {
                precos.forEach(preco => {
                    let precoProduto = parseFloat(produto.preco.replace(",", "."))
                    if (precoProduto > preco.maior & precoProduto < preco.menor) {
                        filtro.push(produto)
                    }
                })
            }
        })
        return filtro;
    }

    const filtroGeral = (produtos) => {

        let filtradosCor = filtroCor(produtos)
        let filtradosTamanho = filtroTamanho(filtradosCor)
        let filtradosPreco = filtroPreco(filtradosTamanho)
        let filtradosPesquisa = pesquisaProduto(filtradosPreco)

        carregarMaisProdutos(filtradosPesquisa)

        return filtradosPesquisa;

    }

    const ordernarProdutos = (produtos) => {
        if (ordenar === "recente") {
            setFiltrados(produtos.sort((a, b) => new Date(a.data) > new Date(b.data) ? -1 : new Date(b.data) > new Date(a.data) ? 1 : 0))
        }
        if (ordenar === "menor") {
            setFiltrados(produtos.sort((a, b) => parseFloat(a.preco.replace(",", ".")) > parseFloat(b.preco.replace(",", ".")) ? 1 : parseFloat(b.preco.replace(",", ".")) > parseFloat(a.preco.replace(",", ".")) ? -1 : 0))
        }
        if (ordenar === "maior") {
            setFiltrados(produtos.sort((a, b) => parseFloat(a.preco.replace(",", ".")) > parseFloat(b.preco.replace(",", ".")) ? -1 : parseFloat(b.preco.replace(",", ".")) > parseFloat(a.preco.replace(",", ".")) ? 1 : 0))
        }


    }


    return (
        <div>
            <TopBar mobile={width} />
            <div className="container">
                <div className="container-principal">
                    <div className="filtros">
                        <InputPesquisa />
                        <Cores mobile={width} filtro={setCores} arrayFiltro={cores} />
                        <Tamanhos mobile={width} filtro={setTamanhos} arrayFiltro={tamanhos} />
                        <FaixaPreco mobile={width} filtro={setPrecos} arrayFiltro={precos} />
                    </div>
                    <div className="container-produtos">
                        <div className="lista-produtos">
                            {filtrados.slice(0, maisProdutos).map((item, index) =>
                                <CardProduto key={index} produto={item} />)}
                            {carregarMais ?
                                <div className="container-carregar-mais">
                                    <div className="botao-carregar-mais" onClick={() => setMaisProdutos(maisProdutos + 3)}>
                                        <p>CARREGAR MAIS</p>
                                    </div>
                                </div> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PaginaProdutos;