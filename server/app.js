const express = require('express')
const bodyParser = require('body-parser')
const groceryService  = require('./services/groceryService')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.post('/api/sign-up', (req, res)=>{
  let groceryServiceObj = new groceryService(req, res)
  groceryServiceObj.signUp()
})

app.post('/api/sign-in', (req, res)=>{
  let groceryServiceObj = new groceryService(req, res);
  groceryServiceObj.getUserById()
})

app.get('/api/get-all-user', (req, res)=>{
  let groceryServiceObj = new groceryService(req, res)
  groceryServiceObj.getAllUser()
})

app.get('/api/get-all-user', (req, res)=>{
  let groceryServiceObj = new groceryService(req, res)
  groceryServiceObj.getAllUser()
})

app.get('/api/get-user/:id', (req, res, id)=>{
  let groceryServiceObj = new groceryService(req, res)
  groceryServiceObj.getUserById(id)
})

app.listen(4000, function () {
  console.log('Grocery Web app service listening on port 4000!')
})