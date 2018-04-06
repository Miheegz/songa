import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Login, Signup, UserHome, homepageLayout, Cart} from './components'
import ProductList from './components/productList'
import {me, fetchProducts, fetchCart} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props
    const clothing = 'clothing'
    const handcrafted = 'handcrafted'
    const homeliving = 'homeliving'
    const art = 'art'
    const jewelry = 'jewelry'
    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component= {homepageLayout} />
            <Route exact path="/clothing" component = {ProductList} catergory ={clothing} />
            <Route exact path="/handcrafted" component = {ProductList} catergory ={handcrafted} />
            <Route exact path="/homeliving" component = {ProductList} catergory ={homeliving} />
            <Route exact path="/art" component = {ProductList} catergory ={art} />
            <Route exact path="/jewelry" component = {ProductList} catergory ={jewelry} />
            <Route exact path ="/cart" component = {Cart} />
            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route path="/me" component={UserHome} />
                </Switch>
            }
            {/* Displays our Login component as a fallback */}

          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(fetchProducts())
      dispatch(fetchCart())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
