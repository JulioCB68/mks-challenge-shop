'use client'

import Error from '@/app/error'
import Loading from '@/app/loading'
import { useProducts } from '@/hooks/use-products'
import Card from './card'
import { Container, Content } from './styles'

export default function List() {
  const { data: products, isLoading, isError, error } = useProducts()

  return (
    <Container>
      <Content>
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => <Loading key={i} />)}

        {isError && <Error error={error} />}

        {products &&
          products?.map((product, i) => <Card key={i} product={product} />)}
      </Content>
    </Container>
  )
}
