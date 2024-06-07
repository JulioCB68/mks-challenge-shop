import Image from 'next/image'

import {
  CardContainer,
  CardContent,
  CardDescription,
  CardImage,
} from './styles'

import { ShoppingBag } from 'lucide-react'

export default function Card() {
  return (
    <CardContainer>
      <CardImage>
        <Image src={img} alt="Product image" width={150} height={150} />
      </CardImage>
      <CardContent>
        <div>
          <h1>Apple Watch Series 4 GPS</h1>
          <div>R$399</div>
        </div>
        <CardDescription>
          Redesigned from scratch and completely revised.
        </CardDescription>
      </CardContent>
      <button>
        <ShoppingBag /> COMPRAR
      </button>
    </CardContainer>
  )
}
