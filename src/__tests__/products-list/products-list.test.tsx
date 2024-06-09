import { useProducts } from '@/hooks/use-products'
import { IProducts } from '@/services/products'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, renderHook, screen, waitFor } from '@testing-library/react'
import { ReactNode } from 'react'
import List from '../../components/list'

const mockProduct: IProducts = {
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
}

jest.mock('../../hooks/use-products', () => ({
  useProducts: () => ({
    data: [mockProduct],
  }),
}))

describe('List product', () => {
  it('should render cards for each product', () => {
    render(<List />)
    const nameProduct = screen.getByText(/Test Product/i)
    const brandProduct = screen.getByText(/Test Brand/i)
    expect(nameProduct).toBeInTheDocument()
    expect(brandProduct).toBeInTheDocument()
  })

  it('should render cards with correct product data', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { result } = renderHook(() => useProducts(), { wrapper })

    await waitFor(() => result.current.isSuccess)

    const products = result.current.data

    expect(products).toEqual([mockProduct])
  })
})
