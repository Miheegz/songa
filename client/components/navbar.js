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

const Navbar = (props) => {

  const { logOut, isLoggedIn } = props


  return (

    <Menu fixed="top" size="large">
    <Container>
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
          <Button as={Link} to="/login">Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as={Link} to="/signup" primary>Sign Up</Button>
        </Menu.Item>
        </Menu.Menu>

        }


    </Container>
  </Menu>

  );
}

// const renderLoginSignup = () => {
//   return (
//     <ul className="nav navbar-nav navbar-right">
//       <li>
//        <Link to="/signup" activeClassName="active">signup</Link>
//       </li>
//       <li>
//         <Link to="/login" activeClassName="active">login</Link>
//       </li>
//     </ul>
//   );
// }

// const renderLogout = () => {
//   return (
//     <ul className="nav navbar-nav navbar-right">
//       <li>
//       <button
//         className="navbar-btn btn btn-default"
//         onClick={this.props.logout}>
//         logout
//       </button>
//       </li>
//     </ul>
//   );
// }


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

export default connect(mapState, mapDispatch)(Navbar);

Navbar.propTypes = {
  logOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
