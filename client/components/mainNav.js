import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import {
  Button,
  Container,
  Dropdown,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
/* -----------------    COMPONENT     ------------------ */

const MainNav = (props) => {

  const { logOut, isLoggedIn } = props


  return (

    <Segment
    inverted
    textAlign="center"

    vertical
  >
    <Container>

      <Menu inverted pointing secondary size="large">
        <Header as="h1" color="green" size="huge" textAlign="left" style={{ fontSize: '2em', marginBottom: 0, marginTop: '.5em', marginRight: '1cm', marginLeft: '-3cm' }} >Songa    </Header>
        <Menu.Item as={Link} to="/" active margin-left="2cm" >Home</Menu.Item>

        <Dropdown item text="Shop">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/clothing">Clothing</Dropdown.Item>
            <Dropdown.Item as={Link} to="/homeliving">Home + Living</Dropdown.Item>
            <Dropdown.Item as={Link} to="/art">Art + Collectibles </Dropdown.Item>
            <Dropdown.Item as={Link} to="/jewelry">Jewelry</Dropdown.Item>
            <Dropdown.Item as={Link} to="/handcrafted">Handcrafted</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Event Planning">
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

    </Segment>
  );
}

/* -----------------    CONTAINER     ------------------ */

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

export default connect(mapState, mapDispatch)(MainNav);

MainNav.propTypes = {
  logOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
