'use client'

import { IProducts } from '@/services/products'
import { ReactNode, createContext, useState } from 'react'

interface CartContextProps {
  children: ReactNode
}

interface CartContextI {
  cart: IProducts[]
  addProductToCart: (product: IProducts) => void
  removeProductToCart: (productId: number) => void
  clearCart: () => void
}

const initialValue: CartContextI = {
  cart: [],
  addProductToCart: () => {},
  removeProductToCart: () => {},
  clearCart: () => {},
}

const CartContext = createContext<CartContextI>(initialValue)

export default function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<IProducts[]>(initialValue.cart)

  const addProductToCart = (product: IProducts) => {
    setCart([...cart, product])
  }

  const removeProductToCart = (productId: number) => {
    const newCart = cart.filter((product) => product.id !== productId)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
