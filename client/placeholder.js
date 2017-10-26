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
        <Header as="h2" color="teal" textAlign="center">
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

            <Button color="teal" fluid size="large">Login</Button>
          </Segment>
        </Form>
        <Message>
           <a href="/auth/google">Login with Google</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)



<div>
<form onSubmit={handleSubmit} name={name}>
  <div>
    <label htmlFor="email"><small>Email</small></label>
    <input name="email" type="text" />
  </div>
  <div>
    <label htmlFor="password"><small>Password</small></label>
    <input name="password" type="password" />
  </div>
  <div>
    <button type="submit">{displayName}</button>
  </div>
  {error && error.response && <div> {error.response.data} </div>}
</form>
<a href="/auth/google">{displayName} with Google</a>
</div>

export default LoginForm
