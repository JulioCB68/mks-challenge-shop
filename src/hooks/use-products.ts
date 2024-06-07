import { getProducts } from '@/services/products'
import { useQuery } from '@tanstack/react-query'

export function useProducts() {
  return useQuery({
    queryKey: ['get-products'],
    queryFn: getProducts,
  })
}
