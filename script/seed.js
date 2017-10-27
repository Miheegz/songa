/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User} = require('../server/db/models')
const Product = require('../server/db/models/product')
async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])
  const products = await Promise.all([
    Product.create({name: 'basket', price: '23', catergory: 'handcrafted', picture: '../images/IMG_4835.jpg' }),
    Product.create({name: 'baskets', price: '33', catergory: 'handcrafted', picture: '../images/IMG_4836.jpg'}),
    Product.create({name: 'baskets', price: '43', catergory: 'handcrafted', picture: '../images/IMG_4837.jpg'}),
    Product.create({name: 'baskets', price: '53', catergory: 'handcrafted', picture: '../images/IMG_4838.jpg'}),
    Product.create({name: 'Shirt', price: '53', catergory: 'clothing', picture: '../images/IMG_4839.jpg'}),
    Product.create({name: 'Dress', price: '53', catergory: 'clothing', picture: '../images/IMG_4840.jpg'}),
    Product.create({name: 'Dress', price: '53', catergory: 'clothing', picture: '../images/IMG_4841.jpg'})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
