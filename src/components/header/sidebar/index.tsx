import { CartContent, CartHeader, SidebarContainer } from './styles'

import { X } from 'lucide-react'

interface SidebarProps {
  isVisible: boolean
  onClose: () => void
}

export default function Sidebar({ isVisible, onClose }: SidebarProps) {
  return (
    <SidebarContainer isVisible={isVisible}>
      <CartHeader>
        <p>
          Carrinho <br />
          de compras
        </p>
        <button onClick={onClose}>
          <X />
        </button>
      </CartHeader>
      <CartContent>
        <p>Seu carrinho está vazio.</p>
      </CartContent>
    </SidebarContainer>
  )
}
