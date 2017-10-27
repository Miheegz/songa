import axios from 'axios'
import { browserHistory } from 'react-router'

const  initialProducts = []

const GETPRODUCTS = 'GET_PRODUCTS'

export const getProducts = products => ({
  type: GETPRODUCTS, products
})

export const fetchProducts = () =>
dispatch =>
  axios.get('/api/products')
    .then(res => dispatch(getProducts(res.data)))
    .catch(err => console.error('Fetching products unsuccessful', err))


const reducer = (state = initialProducts, action) => {
  switch (action.type) {
  case GETPRODUCTS:
    return [...state,  action.products]
    default:
    return state
  }
}


export default reducer
