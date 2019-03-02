const express = require('express')
const bodyParser = require('body-parser')
const groceryService  = require('./services/groceryService')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.post('/api/sign-up', function (req, res) {
  let groceryServiceObj = new groceryService(req, res)
  groceryServiceObj.signUp()
})

app.post('/api/sign-in', function (req, res) {
  let groceryServiceObj = new groceryService(req, res);
  groceryServiceObj.getUserById()
})

app.get('/api/get-all-user', function (req, res) {
  let groceryServiceObj = new groceryService(req, res)
  groceryServiceObj.getAllUser()
})

app.listen(3000, function () {
  console.log('Grocery Web app service listening on port 3000!')
})