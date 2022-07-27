import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ListProducts } from './components/ListProducts'
import { ProductsProvider } from './Contexts/ProductsContext'
import { ContainerApp } from './styles/app.style'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ProductsProvider>
      <ContainerApp>
        <Header />
        <ListProducts />
        <Footer />
      </ContainerApp>
      <GlobalStyle />
    </ProductsProvider>
  )
}

export default App
