const {ENUM, STRING, INTEGER, DECIMAL, TEXT, ARRAY} = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  status: ENUM('pending', 'completed')

})

module.exports = Cart;
