import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProductToCart } from '../store/cart';
import {
  Card,
  a,
  Header,
  Icon,
  Image
} from 'semantic-ui-react'

class ProductItem extends Component {

  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  render() {
    const product = this.props.item;
    console.log('PPPPPPRODUCT', this.props)
    return (


      <Card >
        <Image src={product.picture}  />
        <Card.Content>
          <Card.Header>
            {product.name}
          </Card.Header>
          <Card.Meta>
            <span className="price">
               {'$' + product.price}
            </span>
          </Card.Meta>
          <Card.Description>
            {product.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a >
            <Icon name="shop" onClick={this.handleAdd} />
            Add to Cart
          </a>
        </Card.Content>
      </Card>

    );

  }
  handleAdd(event) {
    const { addProductToCart, product } = this.props;
    event.stopPropagation();
    addProductToCart(product.id);
  }
}

const mapState = (state) => ({ product: state.item });
const mapDispatch = { addProductToCart };

export default connect(mapState, mapDispatch)(ProductItem);
