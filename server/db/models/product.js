'use strict'

const {STRING, INTEGER, DECIMAL, TEXT, ARRAY} = require('sequelize')
const db = require('../db')

const Product = db.define('products', {
  name: {
    type: STRING,
    allowNull: false
  },
  picture: {
    type: STRING,
    defaultValue: '../images/IMG_4835.jpg'
  },
  price: {
    type: DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  description: TEXT,

  inventory: {
    type: INTEGER,
    defaultValue: 1
  },
  catergory: {
    type: STRING
  }

})

module.exports = Product;
