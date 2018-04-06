import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="green" textAlign="center">
          <Image src="../images/login.png" />
          {' '}Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit} name={name}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              name = "email"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name = "password"
            />

            <Button color="green" fluid size="large">Login</Button>
          </Segment>
        </Form>
        <Message>
           <a href="/auth/google">Login with Google</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)


<Card>
<Image src={product.photo} />
<Card.Content>
  <Card.Header>
    {product.name}
  </Card.Header>
  <Card.Meta>
    <span className='price'>
      {product.price}
    </span>
  </Card.Meta>
  <Card.Description>
    {product.description}
  </Card.Description>
</Card.Content>
<Card.Content extra>
  <a href={`/products/${product.id}`}>
    <Icon name='shop' onClick={addProductToCart}/>
    Add to Cart
  </a>
</Card.Content>
</Card>




<div className="list-group-item min-content user-item">
<div className="media">
  { <div className="media-left media-middle icon-container">
  <img className="media-object img-circle" src={product.photo} />
</div>
}
  <Link
    className="media-body"
    activeclassname="active"
    to={`/products/${product.id}`}>
    <h4 className="media-heading tucked">
      <span >{product.name}</span>
    </h4>
    <h5 className="tucked">
      <span>{product.price}</span>
    </h5>

  </Link>
  <div className="media-right media-middle">

    <button
      className="btn btn-default"
      onClick={this.handleAdd}>
      <span className="glyphicon glyphicon-add" />
    </button>

  </div>
</div>
</div>



import React from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Card,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import AlbumCard from './albumcard.jsx';

class AllAlbums extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      name: ''
    };

    this.filterStory = this.filterStory.bind(this);
    this.renderStorySearch = this.renderStorySearch.bind(this);
  const { products } = props;
  return (
    <div>
      <Segment
        inverted
        textAlign="center"
        style={{
          paddingBottom: 1,
          paddingTop: 2,
        }}
        vertical
      >
        {
          // this is the splash page
        }
        <Container text>
          <Header
            as="h1"
            content="Albums"
            inverted
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 20,
              padding: '0em 0em',
            }}
          />
        </Container>
      </Segment>

      <Card.Group id="albumcards">
        {products.length ? products.map(product => <AlbumCard key={product.id} product={product} />) : <div />}
      </Card.Group>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                SUPER DISCOUNT ON ALBUMS THAT START WITH THE LETTER X
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                List of Albums that start with some other letter
              </p>
              <Header as="h3" style={{ fontSize: '2em' }}>
                1-HOUR SHIPPING
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Yes that's right, you thought it was the stuff of dreams, but
              we're just that good.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image bordered rounded size="large" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">Check Them Out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                "What a Company"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                That is what they all say about us
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                "Nobody is better."
              </Header>
              <p style={{ fontSize: '1.33em' }}>Willy</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Contact</List.Item>
                  <List.Item as="a">About Us</List.Item>
                  <List.Item as="a">Careers</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Policies" />
                <List link inverted>
                  <List.Item as="a">Shipping</List.Item>
                  <List.Item as="a">Returns</List.Item>
                  <List.Item as="a">Cancelling an Order</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Some sweet sweet music quote
                </Header>
                <p>The bestest music quote in the world.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  )
}
};

const mapState = ({ products }) => ({ products })
const mapDispatch = null;

export default connect(mapState, mapDispatch)(AllAlbums);

