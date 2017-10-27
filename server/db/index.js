const db = require('./db')

// // register models
// require('./models')



var User = require('./models/user');
var Product = require('./models/product');
var Cart = require('./models/cart');

Cart.belongsTo(User)
Cart.hasMany(Product)
Product.belongsToMany(Cart, {through: 'cartItem'})

module.exports = db
