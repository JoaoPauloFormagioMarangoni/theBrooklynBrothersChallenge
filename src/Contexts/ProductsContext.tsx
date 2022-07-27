import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

interface ProductsProviderProps {
  children: ReactNode
}

interface ProductsProps {
  name: string
  shortDescription: string
  id: string
  images: [
    {
      alt: string
      asset: {
        url: string
      }
    },
  ]
}

interface ProductsContextProps {
  data: ProductsProps[]
  isLoading: boolean
  products: ProductsProps[]
  filterName: (word: string) => void
}

const ProductsContext = createContext({} as ProductsContextProps)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [data, setData] = useState<ProductsProps[]>([])
  const [products, setProducts] = useState<ProductsProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('data')

      setData(response.data.nodes)
      setProducts(response.data.nodes)
      setIsLoading(false)
    }

    loadProducts()
  }, [])

  function filterName(word: string) {
    setProducts(
      data.filter((product) =>
        product.name.toLowerCase().includes(word.trim().toLowerCase()),
      ),
    )
  }

  return (
    <ProductsContext.Provider value={{ data, isLoading, filterName, products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => useContext(ProductsContext)
