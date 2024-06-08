'use client'

import { useState } from 'react'
import { Cart, StyledHeader, Title } from './styles'

import { useCart } from '@/context/cart-context'
import { ShoppingCart } from 'lucide-react'
import Sidebar from './sidebar'

export default function Header() {
  const [isSidebarVisible, setSidebarVisible] = useState(false)
  const { cart } = useCart()

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible)
  }

  return (
    <>
      <StyledHeader>
        <Title>
          <strong>MKS</strong> Sistemas
        </Title>
        <Cart onClick={toggleSidebar}>
          <ShoppingCart size={18} />
          <p>{cart.length}</p>
        </Cart>
      </StyledHeader>
      <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />
    </>
  )
}
