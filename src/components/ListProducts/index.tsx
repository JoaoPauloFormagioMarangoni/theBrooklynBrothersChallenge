import { useCallback, useEffect, useRef, useState } from 'react'
import { useProducts } from '../../Contexts/ProductsContext'
import { ContainerArticle, LoadingComponent } from './styles'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export function ListProducts() {
  const { products, isLoading } = useProducts()
  const [quantity, setQuantity] = useState(15)
  const observeRef = useRef<HTMLSpanElement>(null)

  const handleObserver = useCallback(
    (entries: any) => {
      const [entry] = entries
      const historyLength = products.length || []

      if (entry.isIntersecting) {
        setQuantity((oldState) =>
          oldState > historyLength ? oldState : oldState + 15,
        )
      }
    },
    [products.length],
  )

  useEffect(() => {
    const observe = new IntersectionObserver(handleObserver)

    if (observeRef.current) {
      observe.observe(observeRef.current)
    }
  }, [observeRef, handleObserver])

  return (
    <ContainerArticle>
      <div>Results - {products.length}</div>

      {isLoading ? (
        <SkeletonTheme baseColor="#181818" highlightColor="#444">
          <Skeleton count={15} className="skeletonStyle" />
        </SkeletonTheme>
      ) : products.length === 0 ? (
        <div>Busca não encontrada</div>
      ) : (
        <>
          <ul>
            {products
              .filter((product, index) => index < quantity)
              .map((product) => (
                <li key={product.id}>
                  <LazyLoadImage
                    src={product.images[0].asset.url}
                    alt={product.images[0].alt}
                    height={300}
                    effect="opacity"
                  />
                  <h2>{product.name}</h2>
                  <p>{product.shortDescription}</p>
                </li>
              ))}
          </ul>
          {quantity < products.length && <LoadingComponent ref={observeRef} />}
        </>
      )}
    </ContainerArticle>
  )
}
