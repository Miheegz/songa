import React, { Component } from 'react';
import ProductItem1 from './productItem1'
import { connect } from 'react-redux';
import {fetchProducts} from '../store/product'
import {
  Card
} from 'semantic-ui-react'

class ProductList1 extends Component {

  constructor(props) {
    super(props);


    // this.onSubmit = this.onSubmit.bind(this);
     console.log()
    // const products = this.props.products;



    //  const filteredProducts = products[0].filter(function (product) {return product.catergory === this.props.catergory})
  }

  render() {

    // const products = this.props.products;
    const catergory = this.props.match.path.substring(1)
    const products = Moltin.Products.All().then((products) => {
      console.log(products);
    });

    return (
      <div className="container">

      <br />
      <div className="user-list">
      <Card.Group>
      { products.length > 0 ?
            products.map(product => {

              return <ProductItem1 key = {product.data[0].product_id} item={product.data[0]} pic={product.data[0].links.self} />
            })
            : <div> NOPE</div>
          }
          </Card.Group>
        </div>
      </div>
        );
  }



}

const mapState = (state) => ({catergory: state.catergory })

const mapDispatch = {fetchProducts};

export default connect(mapState, mapDispatch)(ProductList1)
