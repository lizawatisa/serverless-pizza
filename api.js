'use strict'
const Api = require('claudia-api-builder')
const api = new Api()
const getPizzas = require('./handlers/get-pizzas')
const createOrder = require('./handlers/create-order')
const getOrder = require('./handlers/pizza-orders')
const deleteOrder = require('./handlers/delete-order')
const updateOrder = require('./handlers/update-order')
api.get('/', () => 'Welcome to Pizza API') 
api.get('/pizzas', () => {
 return getPizzas()
})
api.get('/pizzas/{id}', (request) => {
 return getPizzas(request.pathParams.id)
}, {
 error: 404
})
api.get('/orders', () => {
 return getOrder()
})
api.get('/orders/{id}', (request) => {
 return getOrder(request.pathParams.id)
}, {
 error: 404
})


api.post('/orders', (request) => {
 return createOrder(request.body)
}, {
	 success: 201,
 error: 400
})

api.put('/orders/{id}', (request) => {
 return updateOrder(request.pathParams.id, request.body)
}, {
 error: 400
})
api.delete('/orders/{id}', (request) => {
 return deleteOrder(request.pathParams.id)
}, {
 error: 400
})
module.exports = api