import { useCallback, useEffect, useRef, useState } from 'react'
import { useProducts } from '../../Contexts/ProductsContext'
import { ContainerArticle, LoadingComponent, ReturnBack } from './styles'
import { FiArrowUp } from 'react-icons/fi'

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
        <ul>
          {[...Array(15)].map((value, index) => (
            <li key={index}>
              <SkeletonTheme baseColor="#c6c6c6" highlightColor="#b2b2b2">
                <Skeleton containerClassName="skeletonStyleImg" height={200} />
                <Skeleton containerClassName="skeletonStyleTitle" height={30} />
                <Skeleton containerClassName="skeletonStyleP" height={30} />
              </SkeletonTheme>
            </li>
          ))}
        </ul>
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
          {products.length > 3 && <ReturnBack href="#header"><FiArrowUp /></ReturnBack>}
        </>
      )}
    </ContainerArticle>
  )
}
