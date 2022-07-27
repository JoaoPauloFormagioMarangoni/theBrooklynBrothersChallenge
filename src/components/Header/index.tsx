import { FormEvent, useRef } from 'react'
import { useProducts } from '../../Contexts/ProductsContext'
import { ContainerHeader } from './styles'
import { BiSearchAlt } from 'react-icons/bi'

import Logo from '../../assets/logo.jpg'

export function Header() {
  const { filterName } = useProducts()
  const wordFilter = useRef<HTMLInputElement>(null)

  function handleFilterName(e: FormEvent) {
    e.preventDefault()

    if (wordFilter.current) {
      filterName(wordFilter.current.value)
    }
  }

  return (
    <ContainerHeader>
      <img src={Logo} alt="The Brooklyn Brothers" />

      <form onSubmit={handleFilterName}>
        <input type="text" ref={wordFilter} />
        <button type="submit">
          <BiSearchAlt className="searchButton" />
        </button>
      </form>
    </ContainerHeader>
  )
}
