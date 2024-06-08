import Image from 'next/image'

import {
  CardContainer,
  CardContent,
  CardDescription,
  CardImage,
} from './styles'

import { useCart } from '@/context/cart-context'
import { IProducts } from '@/services/products'
import { decreaseString, formatCurrency } from './helpers'

import { ShoppingBag } from 'lucide-react'
interface ICardProps {
  product: IProducts
}

export default function Card({ product }: ICardProps) {
  const { addProductToCart, cart } = useCart()

  const existInCart = cart.find((id) => product.id === id)

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
      <button onClick={() => addProductToCart(product)}>
        <ShoppingBag /> COMPRAR
      </button>
    </CardContainer>
  )
}
