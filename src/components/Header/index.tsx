import { FormEvent, useRef } from 'react'
import { useProducts } from '../../Contexts/ProductsContext'
import { ContainerHeader } from './styles'
import { BiSearchAlt } from 'react-icons/bi'

import Logo from '../../assets/logo.jpg'

export function Header() {
  const { filterName } = useProducts()
  const wordFilter = useRef<HTMLInputElement>(null)
  const categoryFilter = useRef<HTMLSelectElement>(null)

  function handleFilterName(e: FormEvent) {
    e.preventDefault()

    if (wordFilter.current && wordFilter.current.value.trim() !== '') {
      filterName(wordFilter.current.value)
      wordFilter.current.value = ''

      categoryFilter.current ? (categoryFilter.current.value = '') : ''

      return
    }

    if (categoryFilter.current) {
      filterName(categoryFilter.current.value)
      return
    }
  }

  function handleResetFilter() {
    filterName('')
    categoryFilter.current ? (categoryFilter.current.value = '') : ''
    wordFilter.current ? (wordFilter.current.value = '') : ''
  }

  return (
    <ContainerHeader id="header">
      <img src={Logo} alt="The Brooklyn Brothers" />
      <div>
        <button onClick={handleResetFilter}>Redefinir</button>
        <form onSubmit={handleFilterName}>
          <select
            name="category"
            id="category"
            ref={categoryFilter}
            onChange={handleFilterName}
          >
            <option value="">Category</option>
            <option value="antitranspirante">Antitranspirante</option>
            <option value="aerosol">Aerosol</option>
            <option value="gel fresh">Gel Fresh</option>
            <option value="líquido">Líquido</option>
            <option value="mini">Mini</option>
            <option value="antibacterial">Antibacterial</option>
          </select>
          <div>
            <input type="text" placeholder='Pesquisar' ref={wordFilter} />
            <button type="submit">
              <BiSearchAlt className="searchButton" />
            </button>
          </div>
        </form>
      </div>
    </ContainerHeader>
  )
}
