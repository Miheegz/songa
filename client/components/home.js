import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Dropdown
} from 'semantic-ui-react'
import Navbar from './navbar'

// const FixedMenu = () => (
//   <Menu fixed="top" size="large">
//     <Container>
//       <Menu.Item as={Link} to="/home" active>Home</Menu.Item>
//       <Menu.Item as={Link} to="/shop">Shop</Menu.Item>
//       <Menu.Item as={Link} to="/eventplanning">Event Planning</Menu.Item>
//       <Menu.Item as={Link} to="/afrique">Cadeaux d'Afrique</Menu.Item>
//       <Menu.Menu position="right">
//         <Menu.Item className="item">
//           <Button as={Link} to="/login">Log in</Button>
//         </Menu.Item>
//         <Menu.Item>
//           <Button as={Link} to="/signup" primary>Sign Up</Button>
//         </Menu.Item>
//       </Menu.Menu>
//     </Container>
//   </Menu>
// )

export default class HomepageLayout extends Component {
  constructor(props){
    super(props);
  this.state = {
    visible: false
  };


}

hideFixedMenu = () => this.setState({ visible: false })
showFixedMenu = () => this.setState({ visible: true })

render() {
  const { visible } = this.state
  const { logOut, isLoggedIn } = this.props
    return (
      <div>
        { visible ? <Navbar /> : null }
      {console.log('VISIBLE', visible)}
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >

          <Container>
          <Menu inverted pointing secondary size="large">
            <Menu.Item as={Link} to="/home" active>Home</Menu.Item>

            <Dropdown item text= "Shop">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/clothing">Clothing</Dropdown.Item>
                <Dropdown.Item as={Link} to="/homeliving">Home + Living</Dropdown.Item>
                <Dropdown.Item as={Link} to="/art">Art + Collectibles </Dropdown.Item>
                <Dropdown.Item as={Link} to="/jewelry">Jewelry</Dropdown.Item>
                <Dropdown.Item as={Link} to="/handcrafted">Handcrafted</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text= "Event Planning">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/wedding">Weddings + Parties</Dropdown.Item>
                <Dropdown.Item as={Link} to="/decorations">Decorations</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as={Link} to="/afrique">Cadeaux d'Afrique</Menu.Item>
            <Menu.Item as={Link} to="/gakwaya">Abbey Straton Gakwaya Foundation</Menu.Item>


            {
              isLoggedIn
                ?
                <Menu.Menu position="right">
                <Menu.Item>
                  <Button as={Link} to="/" primary onClick={logOut}>Logout</Button>
                </Menu.Item>
                </Menu.Menu>
              :
              <Menu.Menu position="right">
              <Menu.Item className="item">
                <Button as={Link} to="/login" inverted>Log in</Button>
              </Menu.Item>
              <Menu.Item>
                <Button as={Link} to="/signup" inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
              </Menu.Item>
              </Menu.Menu>

              }


              </Menu>
          </Container>

            <Container text>
              <Header
                as="h1"
                content="Songa"
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as="h2"
                content="Bringing Rwanda to you"
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size="huge">
                Get Started
                <Icon name="right arrow" />
              </Button>
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible. Let us delight
                  your customers and empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  size="large"
                  src="/assets/images/wireframe/white-image.png"
                />
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
                <Header as="h3" style={{ fontSize: '2em' }}>"What a Company"</Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src="/assets/images/avatar/large/nan.jpg" />
                  <b>Chris</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have learned how to master the art of doing
              nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
              and worth your attention.
            </p>
            <Button as="a" size="large">Read More</Button>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href="#">Case Studies</a>
            </Divider>
            <Header as="h3" style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
              true.
              It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
            </p>
            <Button as="a" size="large">I'm Still Quite Interested</Button>
          </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Event Planning</List.Item>
                    <List.Item as="a">Abbey Straton Gakwaya Foundation</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a">Banana Pre-Order</List.Item>
                    <List.Item as="a">DNA FAQ</List.Item>
                    <List.Item as="a">How To Access</List.Item>
                    <List.Item as="a">Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>Songa Inc</Header>
                  <p>Made by Chris Mihigo</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}
