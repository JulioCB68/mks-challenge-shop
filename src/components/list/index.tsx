'use client'

import Card from './card'
import { Container, Content } from './styles'

export default function List() {
  return (
    <Container>
      <Content>
        {[...Array(8)].map((_, i) => (
          <Card key={i} />
        ))}
      </Content>
    </Container>
  )
}
