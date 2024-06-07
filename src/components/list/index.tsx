'use client'

import { useProducts } from '@/hooks/use-products'
import Card from './card'
import { Container, Content } from './styles'

export default function List() {
  const { data: products } = useProducts()

  return (
    <Container>
      <Content>
        {products &&
          products?.map((product, i) => <Card key={i} product={product} />)}
      </Content>
    </Container>
  )
}
