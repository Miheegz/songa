
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// import functions from reducer here to update / delete items

// ----- cart component -----

export const Cart = (props) => {
  const cart = Moltin.Cart.Items();
  console.log('items in Cart', cart)

  return (
    <div className="container">
      <h3>Here are the items in your cart. Buy more!</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            cart && cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{'$' + item.unit_price.amount}</td>
                <td>1</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Link to={'/checkout'}>
        <button className="btn-default">Proceed to Checkout</button>
      </Link>
    </div>
  )
}

// ----- cart container -----
// instead of getting all the orders, fetch by user (see Routes)
const mapStateToProps = null

// we'll want to mapDispatch a function to add to cart??
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
