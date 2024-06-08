import axios from 'axios'

export interface IProducts {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: number
  createdAt: string
  updatedAt: string
  quantity: number
}

export async function getProducts(): Promise<IProducts[]> {
  const response = await axios.get(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products',
    {
      params: {
        page: 1,
        rows: 8,
        sortBy: 'id',
        orderBy: 'ASC',
      },
    },
  )
  return response.data.products
}
