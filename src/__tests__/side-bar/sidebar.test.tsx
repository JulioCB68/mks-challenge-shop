import { CartContextI } from '@/context/cart-context'
import { fireEvent, render, screen } from '@testing-library/react'
import Sidebar from '../../components/header/sidebar'

const mockCartContext: CartContextI = {
  cart: [],
  addProductToCart: jest.fn(),
  removeProductToCart: jest.fn(),
  clearCart: jest.fn(),
  increaseQuantity: jest.fn(),
  decreaseQuantity: jest.fn(),
}

jest.mock('../../context/cart-context', () => ({
  useCart: () => mockCartContext,
}))

function renderSidebar() {
  return render(<Sidebar isVisible={true} onClose={jest.fn()} />)
}

describe('Sidebar', () => {
  it('should render the sidebar when isVisible is true', () => {
    render(<Sidebar isVisible={true} onClose={jest.fn()} />)
    expect(screen.getByText(/Carrinho de compras/i)).toBeInTheDocument()
  })

  it('should display empty cart message when cart is empty', () => {
    mockCartContext.cart = []
    renderSidebar()
    expect(screen.getByText(/Seu carrinho está vazio/i)).toBeInTheDocument()
  })

  it('should display products in the cart', () => {
    mockCartContext.cart = [
      {
        id: 1,
        name: 'Test Product',
        brand: 'Test Brand',
        description: 'Test Description',
        photo:
          'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
        price: 100.0,
        createdAt: '2023-10-30T16:25:01.093Z',
        updatedAt: '2023-10-30T16:25:01.093Z',
        quantity: 1,
      },
    ]
    renderSidebar()
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument()
  })

  it('should increase product quantity', () => {
    mockCartContext.cart = [
      {
        id: 1,
        name: 'Test Product',
        brand: 'Test Brand',
        description: 'Test Description',
        photo:
          'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
        price: 100.0,
        createdAt: '2023-10-30T16:25:01.093Z',
        updatedAt: '2023-10-30T16:25:01.093Z',
        quantity: 1,
      },
    ]
    renderSidebar()
    const increaseButton = screen.getAllByText('+')[0]
    fireEvent.click(increaseButton)
    expect(mockCartContext.increaseQuantity).toHaveBeenCalledWith(1)
  })

  it('should decrease product quantity', () => {
    mockCartContext.cart = [
      {
        id: 1,
        name: 'Test Product',
        brand: 'Test Brand',
        description: 'Test Description',
        photo:
          'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
        price: 100.0,
        createdAt: '2023-10-30T16:25:01.093Z',
        updatedAt: '2023-10-30T16:25:01.093Z',
        quantity: 1,
      },
    ]
    renderSidebar()
    const decreaseButton = screen.getAllByText('-')[0]
    fireEvent.click(decreaseButton)
    expect(mockCartContext.decreaseQuantity).toHaveBeenCalledWith(1)
  })

  it('should call onClose when close button is clicked', () => {
    const onCloseMock = jest.fn()
    render(<Sidebar isVisible={true} onClose={onCloseMock} />)
    const closeButton = screen.getByTestId('closeModalButton')
    fireEvent.click(closeButton)
    expect(onCloseMock).toHaveBeenCalled()
  })
})
