import React, { Component } from 'react';
import ProductItem from './productItem'
import { connect } from 'react-redux';
import {fetchProducts} from '../store/product'
import {
  Card
} from 'semantic-ui-react'

class ProductList extends Component {

  constructor(props) {
    super(props);


    // this.onSubmit = this.onSubmit.bind(this);
     console.log()
    // const products = this.props.products;



    //  const filteredProducts = products[0].filter(function (product) {return product.catergory === this.props.catergory})
  }

  render() {

    const products = this.props.products;
    const catergory = this.props.match.path.substring(1)

    return (
      <div className="container">

      <br />
      <div className="user-list">
      <Card.Group>
      { products.length > 0 ?
            products[0].filter(function(element) {

              return element.catergory === catergory
            }).map(product => {

              return <ProductItem key = {product.id} item={product} />
            })
            : <div> NOPE</div>
          }
          </Card.Group>
        </div>
      </div>
        );
  }



}

const mapState = (state) => ({ products: state.product, catergory: state.catergory })

const mapDispatch = {fetchProducts};

export default connect(mapState, mapDispatch)(ProductList)
