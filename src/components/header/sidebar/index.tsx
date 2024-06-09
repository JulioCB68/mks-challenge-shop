'use client'

import { useCart } from '@/context/cart-context'
import {
  CartContent,
  CartHeader,
  CartItem,
  CartItemActions,
  SidebarContainer,
} from './styles'

import { X } from 'lucide-react'
import Image from 'next/image'

interface SidebarProps {
  isVisible: boolean
  onClose: () => void
}

export default function Sidebar({ isVisible, onClose }: SidebarProps) {
  const { cart, increaseQuantity, decreaseQuantity, removeProductToCart } =
    useCart()

  return (
    <SidebarContainer isVisible={isVisible}>
      <CartHeader>
        <p>
          Carrinho <br />
          de compras
        </p>
        <button onClick={onClose} data-testid="closeModalButton">
          <X />
        </button>
      </CartHeader>
      <CartContent>
        {cart.length <= 0 && <p>Seu carrinho está vazio.</p>}
        {cart.map((item) => (
          <CartItem key={item.id}>
            <Image
              src={item.photo}
              alt="Product Image"
              width={70}
              height={70}
            />
            <h4>{item.name}</h4>
            <CartItemActions>
              <p>Qtd:</p>
              <div>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
              </div>
            </CartItemActions>
            <p>{item.price}</p>
            <button
              onClick={() => removeProductToCart(item.id)}
              data-testid="removeProductFromCartButton"
            >
              <X />
            </button>
          </CartItem>
        ))}
      </CartContent>
    </SidebarContainer>
  )
}
