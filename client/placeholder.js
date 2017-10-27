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
