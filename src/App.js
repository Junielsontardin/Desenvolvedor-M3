import React from 'react'
import PaginaProdutos from './paginas/PaginaProdutos';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PaginaCarrinho from './paginas/PaginaCarrinho';
import EcommerceProvider from './context/ContextEcommerce';
import NavBar from './componentes/NavBar';

function App() {

  return (
    <BrowserRouter>
      <EcommerceProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={PaginaProdutos} />
          <Route path="/carrinho" component={PaginaCarrinho} />
        </Switch>
      </EcommerceProvider>
    </BrowserRouter>
  )
}

export default App;
