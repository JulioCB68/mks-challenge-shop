'use client'

import { getProducts } from '@/services/products'
import { useQuery } from '@tanstack/react-query'
import Card from './card'
import { Container, Content } from './styles'

export default function List() {
  const { data: products } = useQuery({
    queryKey: ['get-products'],
    queryFn: getProducts,
  })

  return (
    <Container>
      <Content>
        {products &&
          products?.map((product, i) => <Card key={i} product={product} />)}
      </Content>
    </Container>
  )
}
