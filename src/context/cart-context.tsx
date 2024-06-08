'use client'

import { IProducts } from '@/services/products'
import { ReactNode, createContext, useContext, useState } from 'react'

interface CartContextProps {
  children: ReactNode
}

interface CartContextI {
  cart: IProducts[]
  addProductToCart: (product: IProducts) => void
  removeProductToCart: (productId: number) => void
  clearCart: () => void
  increaseQuantity: (productId: number) => void
  decreaseQuantity: (productId: number) => void
}

const initialValue: CartContextI = {
  cart: [],
  addProductToCart: () => {},
  removeProductToCart: () => {},
  clearCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
}

export const CartContext = createContext<CartContextI>(initialValue)

export default function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<IProducts[]>(initialValue.cart)

  function addProductToCart(product: IProducts) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id)
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  function removeProductToCart(productId: number) {
    const newCart = cart.filter((product) => product.id !== productId)
    setCart(newCart)
  }

  function clearCart() {
    setCart([])
  }

  function increaseQuantity(productId: number) {
    setCart((prevCart) =>
      prevCart.map((p) =>
        p.id === productId ? { ...p, quantity: p.quantity + 1 } : p,
      ),
    )
  }

  function decreaseQuantity(productId: number) {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === productId && p.quantity > 1
            ? { ...p, quantity: p.quantity - 1 }
            : p,
        )
        .filter((p) => p.quantity > 0),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductToCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
