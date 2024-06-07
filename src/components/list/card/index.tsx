import Image from 'next/image'

import {
  CardContainer,
  CardContent,
  CardDescription,
  CardImage,
} from './styles'

import { IProducts } from '@/services/products'
import { ShoppingBag } from 'lucide-react'
import { decreaseString, formatCurrency } from './helpers'

interface ICardProps {
  product: IProducts
}

export default function Card({ product }: ICardProps) {
  return (
    <CardContainer>
      <CardImage>
        <Image
          src={product.photo}
          alt="Product image"
          width={150}
          height={150}
        />
      </CardImage>
      <CardContent>
        <div>
          <h1>
            {product.brand} {product.name}
          </h1>
          <div>{formatCurrency(product.price)}</div>
        </div>
        <CardDescription>{decreaseString(product.description)}</CardDescription>
      </CardContent>
      <button>
        <ShoppingBag /> COMPRAR
      </button>
    </CardContainer>
  )
}
