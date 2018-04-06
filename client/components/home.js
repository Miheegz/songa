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
import MainNav from './mainNav'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { logout } from '../store';
import TextToSVG from 'text-to-svg';
const textToSVG = TextToSVG.loadSync();
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

class HomepageLayout extends Component {
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
  console.log("LOGGED IN", isLoggedIn)
  const S =textToSVG.getD('S')
  const O =textToSVG.getD('O')
  const N =textToSVG.getD('N')
  const G =textToSVG.getD('G')
  const A =textToSVG.getD('A')
  console.log(S)
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
            style={{ minHeight: 700, padding: '1em 0em', backgroundImage: "url(../images/rwanda.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%" }}
            vertical
          >


            <Container text>
              <Header
                as="h1"

                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              SONGA
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
                <Header as="h3" style={{ fontSize: '2em' }}>Header</Header>
                <p style={{ fontSize: '1.33em' }}>
                  "Started from the bottom now we here"
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>Header 2</Header>
                <p style={{ fontSize: '1.33em' }}>
                  "Where you movin? I said onto better things"
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
                <Header as="h3" style={{ fontSize: '2em' }}>"Tuck my napkin in my shirt cause I'm just ballin like that"</Header>
                <p style={{ fontSize: '1.33em' }}>6 god</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>"Jealousy is just love and hate at the same time"</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src="/assets/images/avatar/large/nan.jpg" />
                  <b>Chris</b> Champagne Papi
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>Header 3</Header>
            <p style={{ fontSize: '1.33em' }}>
              "I made a decision last night I would die for it"
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
            <Header as="h3" style={{ fontSize: '2em' }}>Header 4</Header>
            <p style={{ fontSize: '1.33em' }}>
              "I cannot give you the recipe, you know the game is sold separately"
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

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}


const mapDispatch = dispatch => ({
  logOut: () => {
    console.log('You signed out. Sorta.');
    dispatch(logout())
    // browserHistory.push('/');
  }
});

export default connect(mapState, mapDispatch)(HomepageLayout);

HomepageLayout.propTypes = {
  logOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
