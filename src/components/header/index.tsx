'use client'

import { useState } from 'react'
import { Cart, StyledHeader, Title } from './styles'

import { ShoppingCart } from 'lucide-react'
import Sidebar from './sidebar'

export default function Header() {
  const [isSidebarVisible, setSidebarVisible] = useState(false)

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
          <p>0</p>
        </Cart>
      </StyledHeader>
      <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />
    </>
  )
}
