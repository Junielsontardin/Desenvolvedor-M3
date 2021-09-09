import React from 'react'
import PaginaProdutos from './paginas/PaginaProdutos';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PaginaCarrinho from './paginas/PaginaCarrinho';
import CarrinhoProvider from './context/ContextCarrinho';
import NavBar from './componentes/NavBar';

function App() {

  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={PaginaProdutos} />
          <Route path="/carrinho" component={PaginaCarrinho} />
        </Switch>
      </CarrinhoProvider>
    </BrowserRouter>
  )
}

export default App;
