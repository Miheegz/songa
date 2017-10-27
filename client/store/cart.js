import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const REMOVE_CART = 'REMOVE_CART'
const CREATE_CART = 'CREATE_CART'
const SET_CART = 'SET_CART'
/**
 * INITIAL STATE
 */
const initialCart = {}

/**
 * ACTION CREATORS
 */
const getCart = cart => ({type: GET_CART, cart})
const removeCart = () => ({type: REMOVE_CART})
const createCart = () => ({type: CREATE_CART})
const setCart = product => ({type: SET_CART, product})
/**
 *
 */
const groupProductsOnCart = (cart) => {
  const groupCart = []

  let found
  for (let i=0; i<cart.length; i++) {
    found=false
    for (let j=0; j<groupCart.length && !found; j++) {
      if (groupCart[j].product_id === cart[i].product_id) {
        groupCart[j].quantity++
        found=true
      }
    }
    if (!found) {
      groupCart.push(cart[i])
    }
  }
  return groupCart
}
/* THUNK CREATORS
 */
export const fetchCart = () =>
  dispatch =>
    axios.get('/api/cart/')
      .then(res =>
        dispatch(getCart(res.data)))
      .catch(err => console.log(err))
export const deleteCart = () =>
    dispatch =>
        axios.delete('/api/cart/')
        .then(res =>
          dispatch(removeCart(res.data)))
        .catch(err => console.log(err))
export const addProductToCart = (product) =>
  dispatch =>
    axios.post('/api/cart/', product)
      .then(res => {
        dispatch(setCart(groupProductsOnCart(res.data)))
      })
      .catch(err => console.error('Fail to update cart', err))


/**
 * REDUCER
 */
export default function (state = initialCart, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case REMOVE_CART:
      return {}
    case SET_CART:
      return Object.assign({}, state, {cart: action.product})
    default:
      return state
  }
}
