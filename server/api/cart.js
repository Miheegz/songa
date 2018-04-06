const router = require('express').Router()
const Cart = require('../db/models/cart')
const Product = require('../db/models/product')
module.exports = router


router.get('/cart', (req, res, next) => {

  const userId = req.user.id
  console.log('USERRRRR', userId)

  Cart.find({where: {userId}})
  .then(function (cart)  {
    return cart ? next( cart)
    : Cart.create({userId})
      .then(function (createdCart) {return next( createdCart)})
  })
  .catch(next)

})

router.delete('/:userId', (req, res, next) => {
  Cart.destroy({
    where: {userId: req.params.userId}
  })
  .then(() => res.sendStatus(204))
  .catch(next)
})

router.post('/', (req, res, next) => {
  const userId = req.user
  if (userId){
    Cart.findOne({
      where: {userId: userId},
      include: [
        { include: [{model: Product}]}
      ]
    })
    .then(cart => {
    cart.addProduct(req.body.product, {
    where: {userId: userId}
  })
  .then( userCart => {
    res.json(userCart)
    .catch(next)
  })
})
}
})
